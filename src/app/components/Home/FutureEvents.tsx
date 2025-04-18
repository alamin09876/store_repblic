"use client";

const events = [
  {
    title: "The Future of AI Trends & Innovations",
    location: "Main Auditorium, TechHub Conference Center",
    date: "25",
    monthYear: "March 2025",
    time: "10:00 AM – 12:00 PM",
    status: "Buy Ticket",
  },
  {
    title: "Cybersecurity Protecting Data & Privacy",
    location: "Room A2, TechHub Conference Center",
    date: "27",
    monthYear: "March 2025",
    time: "10:00 AM – 12:00 PM",
    status: "Free",
  },
  {
    title: "Blockchain & Web3 Beyond Cryptocurrency",
    location: "Innovation Stage, TechHub Conference Center",
    date: "15",
    monthYear: "March 2025",
    time: "10:00 AM – 12:00 PM",
    status: "Sold Out",
  },
];

export default function EventList() {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="md:col-span-4 grid md:grid-cols-4 items-center border-b border-gray-700 pb-8"
          >
            {/* Event Details */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-400 mt-2">
                Location: {event.location}
              </p>
            </div>

            {/* Date */}
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold">{event.date}</p>
                <p className="text-sm mt-1">{event.monthYear}</p>
              </div>
            </div>

            {/* Time */}
            <div className="md:col-span-1 text-center md:text-left">
              <p className="text-sm">{event.time}</p>
            </div>

            {/* Button or Label */}
            <div className="md:col-span-1 flex justify-center md:justify-end mt-4 md:mt-0">
              {event.status === "Buy Ticket" ? (
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded">
                  {event.status}
                </button>
              ) : (
                <span className="text-sm text-gray-300">{event.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
