<template>
  <div id="app">
    <!-- Section 1: Hero -->
    <section class="hero">
      <div class="hero-content">
        <h1>Auem & MooNoom</h1>
        <p>We are getting married on November 9th, 2025.</p>

        <!-- Countdown Timer -->
        <div class="countdown">
          <div class="countdown-item">
            <span>{{ countdown.days }}</span>
            <span>DAYS</span>
          </div>
          <div class="countdown-item">
            <span>{{ countdown.hours }}</span>
            <span>HOURS</span>
          </div>
          <div class="countdown-item">
            <span>{{ countdown.minutes }}</span>
            <span>MINUTES</span>
          </div>
          <div class="countdown-item">
            <span>{{ countdown.seconds }}</span>
            <span>SECONDS</span>
          </div>
        </div>
      </div>

      <!-- Hero Image -->
      <img src="/love.jpg" alt="Hero" class="hero-image" />
    </section>

    <!-- Section 2: RSVP Info -->
    <section class="rsvp-info">
      <div class="info-content">
        <h2>RSVP & Info</h2>
        <p>
          Join us for our special day on November 9th, 2025.
          <br />
          Venue: Park Hotel, Los Angeles
        </p>
        <button class="rsvp-button">RSVP</button>
      </div>
      <img src="/love.jpg" alt="RSVP Info" class="info-image" />
    </section>

    <!-- Section 3: Schedule -->
    <section class="schedule">
      <h2>Schedule</h2>
      <div class="schedule-items">
        <div class="schedule-item">
          <img src="/love.jpg" alt="Wedding Ceremony" />
          <h3>Wedding Ceremony</h3>
          <p>5:00 PM</p>
        </div>
        <div class="schedule-item">
          <img src="/love.jpg" alt="Appetizers & Drinks" />
          <h3>Appetizers & Drinks</h3>
          <p>6:00 PM</p>
        </div>
        <div class="schedule-item">
          <img src="/love.jpg" alt="Dinner Service" />
          <h3>Dinner Service</h3>
          <p>7:00 PM</p>
        </div>
        <div class="schedule-item">
          <img src="/love.jpg" alt="Dance Party" />
          <h3>Dance Party</h3>
          <p>8:00 PM - 12:30 AM</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Photo Gallery -->
    <section class="gallery">
      <h2>Our Journey</h2>
      <div class="gallery-items">
        <img src="/love.jpg" alt="Gallery Image 1" />
        <img src="/love.jpg" alt="Gallery Image 2" />
        <img src="/love.jpg" alt="Gallery Image 3" />
        <img src="/love.jpg" alt="Gallery Image 4" />
        <img src="/love.jpg" alt="Gallery Image 5" />
      </div>
    </section>

    <!-- Section 5: Story -->
    <section class="story">
      <h2>Our Story</h2>
      <p>Discover our journey from chance encounter to true love.</p>
      <img src="/love.jpg" alt="Our Story" />
      <button class="story-button">Our Story</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";

export default defineComponent({
  setup() {
    // Reactive state for countdown
    const countdown = reactive({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    // Function to calculate time remaining
    const calculateCountdown = () => {
      const weddingDate = new Date("2025-11-09T00:00:00"); // Wedding date
      const now = new Date();
      const timeDifference = weddingDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        countdown.hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        countdown.minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        countdown.days = 0;
        countdown.hours = 0;
        countdown.minutes = 0;
        countdown.seconds = 0;
      }
    };

    // Update countdown every second
    onMounted(() => {
      calculateCountdown();
      setInterval(calculateCountdown, 1000);
    });

    return {
      countdown,
    };
  },
});
</script>

<style>
/* Global Styles */
body {
  margin: 0;
  font-family: 'Georgia', serif;
  background-color: #fff8e8;
  color: #5a3722;
  scroll-behavior: smooth;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 50px 20px;
}

.hero-content {
  margin-bottom: 20px;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 20px;
}

/* Countdown Timer */
.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.countdown-item {
  text-align: center;
  background-color: #001f3f;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.countdown-item span:first-child {
  font-size: 2em;
  font-weight: bold;
  display: block;
}

.countdown-item span:last-child {
  font-size: 1em;
  margin-top: 5px;
  color: #ff6f61;
}
</style>
