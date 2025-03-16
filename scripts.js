// Exercise Data
const exercisePrograms = {
    strength: {
        title: "Strength Training Program",
        exercises: [
            {
                name: "Bench Press",
                equipment: "Barbell, Bench",
                alternateVersion: "Push-ups",
                sets: "4 sets of 8-12 reps",
                description: "Primary chest exercise for building upper body strength",
                technique: "Lie on bench, lower bar to chest, press up with control",
                videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
                altVideoUrl: "https://www.youtube.com/embed/IODxDxX7oi4"
            },
            {
                name: "Deadlift",
                equipment: "Barbell",
                alternateVersion: "Romanian Deadlift with Dumbbells",
                sets: "4 sets of 6-8 reps",
                description: "Compound exercise for full body strength",
                technique: "Hinge at hips, maintain neutral spine, drive through heels",
                videoUrl: "https://www.youtube.com/embed/op9kVnSso6Q",
                altVideoUrl: "https://www.youtube.com/embed/jEy_czb3RKA"
            },
            {
                name: "Squats",
                equipment: "Barbell, Squat Rack",
                alternateVersion: "Bodyweight Squats",
                sets: "4 sets of 8-12 reps",
                description: "Foundation exercise for lower body strength",
                technique: "Keep chest up, knees tracking toes, squat to parallel",
                videoUrl: "https://www.youtube.com/embed/ultWZbUMPL8",
                altVideoUrl: "https://www.youtube.com/embed/aclHkVaku9U"
            }
        ]
    },
    cardio: {
        title: "Cardio Training Program",
        exercises: [
            {
                name: "High-Intensity Interval Training",
                equipment: "None",
                alternateVersion: "Mountain Climbers",
                sets: "30 seconds work, 30 seconds rest x 10",
                description: "Intense cardio bursts to improve endurance",
                technique: "Alternate between max effort and recovery periods",
                videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI",
                altVideoUrl: "https://www.youtube.com/embed/nmwgirgXLYM"
            },
            {
                name: "Jump Rope",
                equipment: "Jump Rope",
                alternateVersion: "High Knees",
                sets: "3 sets of 3 minutes",
                description: "Coordination and cardiovascular endurance",
                technique: "Stay on balls of feet, maintain rhythm",
                videoUrl: "https://www.youtube.com/embed/FJmRQ5iTXKE",
                altVideoUrl: "https://www.youtube.com/embed/ZZZoCNMU48U"
            }
        ]
    },
    fatburn: {
        title: "Fat Burning Program",
        exercises: [
            {
                name: "Burpees",
                equipment: "None",
                alternateVersion: "Modified Burpees (no jump)",
                sets: "3 sets of 10-15 reps",
                description: "Full body exercise for maximum calorie burn",
                technique: "Explosive movement, maintain form throughout",
                videoUrl: "https://www.youtube.com/embed/dZLNXTbXFFI",
                altVideoUrl: "https://www.youtube.com/embed/TU8QYVW0gDU"
            },
            {
                name: "Kettlebell Swings",
                equipment: "Kettlebell",
                alternateVersion: "Bodyweight Good Mornings",
                sets: "4 sets of 20 reps",
                description: "Hip-hinge movement for posterior chain and fat burn",
                technique: "Drive with hips, maintain neutral spine",
                videoUrl: "https://www.youtube.com/embed/YSxHifyI6s8",
                altVideoUrl: "https://www.youtube.com/embed/vKPGe8zb2S4"
            }
        ]
    },
    health: {
        title: "Health Fitness Program",
        exercises: [
            {
                name: "Walking",
                equipment: "None",
                alternateVersion: "Marching in Place",
                sets: "30-45 minutes continuous",
                description: "Low-impact cardiovascular exercise",
                technique: "Maintain good posture, breathe naturally",
                videoUrl: "https://www.youtube.com/embed/3Ka7B3hCg08",
                altVideoUrl: "https://www.youtube.com/embed/kUm6X0Bt0UQ"
            },
            {
                name: "Yoga Flow",
                equipment: "Yoga Mat",
                alternateVersion: "Standing Stretches",
                sets: "20-30 minutes continuous",
                description: "Flexibility and mind-body connection",
                technique: "Focus on breath, move with control",
                videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
                altVideoUrl: "https://www.youtube.com/embed/L_xrDAtykMI"
            }
        ]
    }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const getStartedBtn = document.querySelector('.get-started');
    const joinNowBtn = document.querySelector('.join-now');
    const backButton = document.querySelector('.back-button');
    const programCards = document.querySelectorAll('.program-card');

    // Sections
    const landingSection = document.getElementById('landing');
    const programsSection = document.getElementById('programs');
    const exercisesSection = document.getElementById('exercises');

    // Stats Animation
    const stats = document.querySelectorAll('.number');
    let animated = false;

    // Navigation Functions
    function showPrograms() {
        landingSection.classList.remove('active-section');
        landingSection.classList.add('hidden-section');
        programsSection.classList.remove('hidden-section');
        programsSection.classList.add('active-section');
        exercisesSection.classList.remove('active-section');
        exercisesSection.classList.add('hidden-section');
    }

    function showExercises(program) {
        programsSection.classList.remove('active-section');
        programsSection.classList.add('hidden-section');
        exercisesSection.classList.remove('hidden-section');
        exercisesSection.classList.add('active-section');

        displayExercises(program);
    }

    // Event Listeners
    getStartedBtn.addEventListener('click', showPrograms);
    joinNowBtn.addEventListener('click', showPrograms);

    backButton.addEventListener('click', () => {
        exercisesSection.classList.remove('active-section');
        exercisesSection.classList.add('hidden-section');
        programsSection.classList.remove('hidden-section');
        programsSection.classList.add('active-section');
    });

    programCards.forEach(card => {
        card.addEventListener('click', () => {
            const program = card.dataset.program;
            showExercises(program);
        });
    });

    // Stats Animation
    function animateStats() {
        if (animated) return;

        stats.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.floor(current);
                } else {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 30);
        });

        animated = true;
    }

    // Intersection Observer for Stats Animation
    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    });

    observerStats.observe(document.querySelector('.stats'));

    // Exercise Display Function
    function displayExercises(program) {
        const programData = exercisePrograms[program];
        const exerciseList = document.querySelector('.exercise-list');
        const programTitle = document.querySelector('.program-title');

        programTitle.innerHTML = `<h3>${programData.title}</h3>`;
        exerciseList.innerHTML = programData.exercises.map(exercise => `
            <div class="exercise-card animate-fade-up">
                <h3>${exercise.name}</h3>
                <div class="exercise-content">
                    <div class="exercise-info">
                        <div class="exercise-main">
                            <div class="video-container animate-scale">
                                <iframe src="${exercise.videoUrl}" 
                                    title="${exercise.name} tutorial" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    class="exercise-video">
                                </iframe>
                            </div>
                            <div class="exercise-details animate-fade">
                                <p><strong>Equipment:</strong> ${exercise.equipment}</p>
                                <p><strong>Sets:</strong> ${exercise.sets}</p>
                                <p><strong>Description:</strong> ${exercise.description}</p>
                                <p><strong>Technique:</strong> ${exercise.technique}</p>
                            </div>
                        </div>
                        <div class="exercise-alternative animate-fade">
                            <h4>Alternative Version: ${exercise.alternateVersion}</h4>
                            <div class="video-container animate-scale">
                                <iframe src="${exercise.altVideoUrl}" 
                                    title="${exercise.alternateVersion} tutorial" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    class="exercise-video">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Heart Rate Animation
    let heartRate = 116;
    setInterval(() => {
        heartRate = Math.floor(115 + Math.random() * 5);
        document.querySelector('.bpm').textContent = `${heartRate} bpm`;
    }, 1000);

    // Calories Counter
    let calories = 220;
    setInterval(() => {
        calories += 1;
        document.querySelector('.kcal').textContent = `${calories} kcal`;
    }, 5000);

    // Add animations for program cards
    const cards = document.querySelectorAll('.program-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Initialize progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    progressCircles.forEach(circle => {
        const progress = circle.dataset.progress;
        circle.style.setProperty('--target-progress', progress + '%');
    });

    // Animate achievements on scroll
    const achievements = document.querySelectorAll('.achievement');
    const observerAchievements = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    achievements.forEach(achievement => {
        achievement.style.opacity = '0';
        achievement.style.transform = 'translateY(20px)';
        observerAchievements.observe(achievement);
    });

    // Benefits cards animation
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add hover effect to program details
    const programDetails = document.querySelectorAll('.program-details span');
    programDetails.forEach(detail => {
        detail.addEventListener('mouseenter', () => {
            detail.style.backgroundColor = 'rgba(255, 140, 0, 0.2)';
        });
        detail.addEventListener('mouseleave', () => {
            detail.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });


    // Chart.js Global Configuration
    Chart.defaults.color = '#ffffff';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    // Weekly Activity Chart
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    new Chart(activityCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Workout Minutes',
                data: [45, 60, 30, 75, 45, 90, 60],
                backgroundColor: 'rgba(255, 140, 0, 0.6)',
                borderColor: 'rgba(255, 140, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Fitness Goals Chart
    const goalsCtx = document.getElementById('goalsChart').getContext('2d');
    new Chart(goalsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Upcoming'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: [
                    'rgba(255, 140, 0, 0.8)',
                    'rgba(255, 69, 0, 0.8)',
                    'rgba(255, 255, 255, 0.2)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Monthly Progress Chart
    const progressCtx = document.getElementById('progressChart').getContext('2d');
    new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Strength Progress',
                data: [30, 45, 55, 60, 75, 85],
                borderColor: 'rgba(255, 140, 0, 1)',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(255, 140, 0, 0.1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});