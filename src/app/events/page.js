"use client";
import { useState } from 'react';

export default function Events() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    {
      title: 'Tech Fest',
      description: 'Join us for an amazing day of innovation, code, and creativity!',
      details: 'The Tech Fest includes coding competitions, AI workshops, robotics showcases, and keynote speeches from industry leaders.',
    },
    {
      title: 'Cultural Night',
      description: 'Celebrate diversity and talent with music, dance, and drama!',
      details: 'Enjoy performances from various cultures including classical music, modern dance, and a grand fashion show.',
    },
    {
      title: 'Hackathon',
      description: 'Code for 24 hours. Compete. Build. Win. Eat. Repeat.',
      details: 'Form teams, pick challenges, and compete for exciting prizes. Meals and coffee are on us!',
    },
    {
      title: 'Workshop',
      description: 'Hands-on sessions to upgrade your skills in trending tech.',
      details: 'Topics include Web3, Machine Learning, IoT, and Game Development. Limited seats only!',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="d-flex flex-column gap-4 justify-content-center p-4 align-items-center">

      {/* Top Banner for ORION */}
      <div className="card text-center bg-dark text-white" style={{ width: '70rem' }}>
        <div className="card-body">
          <h1 className="display-4 fw-bold">ORION</h1>
          <p className="lead">A celebration of innovation, culture, and creativity.</p>
        </div>
      </div>

      {/* Event Cards */}
      {events.map((event, index) => (
        <div key={index} className="card" style={{ width: '70rem' }}>
          <img src={`https://via.placeholder.com/800x200?text=${event.title}`} className="card-img-top" alt={event.title} />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.description}</p>
            <button onClick={() => toggleExpand(index)} className="btn btn-primary">
              {expandedIndex === index ? 'Show Less' : 'Know More'}
            </button>
            {expandedIndex === index && (
              <div className="mt-3 border-top pt-3">
                <p>{event.details}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
