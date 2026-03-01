const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Booking Request:", data);
    alert("Thank you! The team will be in touch soon.");
    e.target.reset();
  };

  return (
    <section id="booking" className="py-20 md:py-24 px-6 bg-ivory-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-maroon-900">Book a Concert</h2>
          <p className="text-maroon-800/70 font-light text-sm md:text-base">Invite divine melodies to your spiritual gatherings, temple festivals, or cultural events.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-12 shadow-xl border border-gold-500/10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-bold text-maroon-900 mb-2 uppercase tracking-wide">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-ivory-200 border border-transparent focus:border-gold-500 focus:bg-white outline-none rounded transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-bold text-maroon-900 mb-2 uppercase tracking-wide">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-ivory-200 border border-transparent focus:border-gold-500 focus:bg-white outline-none rounded transition-all" />
            </div>
          </div>
          
          <div className="mb-4 md:mb-6">
            <label htmlFor="eventType" className="block text-xs md:text-sm font-bold text-maroon-900 mb-2 uppercase tracking-wide">Event Type</label>
            <select id="eventType" name="eventType" required className="w-full px-4 py-3 bg-ivory-200 border border-transparent focus:border-gold-500 focus:bg-white outline-none rounded transition-all appearance-none cursor-pointer">
              <option value="">Select an event type...</option>
              <option value="Temple Festival">Temple Festival</option>
              <option value="Private Gathering">Private Spiritual Gathering</option>
              <option value="Cultural Event">Public Cultural Event</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6 md:mb-8">
            <label htmlFor="details" className="block text-xs md:text-sm font-bold text-maroon-900 mb-2 uppercase tracking-wide">Event Details</label>
            <textarea id="details" name="details" rows="4" required placeholder="Please provide date, location, and nature of the event..." className="w-full px-4 py-3 bg-ivory-200 border border-transparent focus:border-gold-500 focus:bg-white outline-none rounded transition-all resize-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-maroon-900 text-gold-500 font-bold uppercase tracking-widest py-3 md:py-4 hover:bg-maroon-800 transition-colors rounded shadow-md text-sm md:text-base">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;