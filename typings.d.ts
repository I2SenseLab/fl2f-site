interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface LearnMore extends SanityBody {
  _type: "learnMore";
  title: string;
  upcomingCourseStart: date;
  upcomingCourseEnd: date;
  earlyBirdCost: string;
  earlyBirdEnd: date; // Assuming you'll parse this as a date
  cost: string;
  deposit: string;
  fullPaymentDueDate: date; // Assuming you'll parse this as a date
  applyDeadline: date; // Assuming you'll parse this as a date
  cancelBy: string; // Assuming you'll parse this as a date
  pstLink: string;
  mstLink: string;
  cstLink: string;
  estLink: string;
  exampleSchedulePart1: Image;
  exampleSchedulePart2: Image;
  IPKnowledge: string;
  skills: string;
  network: string;
}

// Define Image and ImageWithHotspot types based on your data structure
interface Image {
  // Define image properties here
}

interface ImageWithHotspot extends Image {
  options: {
    hotspot: boolean;
  };
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface alumniEvent extends SanityBody {
  _type: "alumniEvent";
  image: Image;
}

export interface certificateEvent extends SanityBody {
  _type: "certificateEvent";
  image: Image;
}

export interface newsEvent extends SanityBody {
  _type: "newsEvent";
  date: date;
  title: string;
  description: string;
  link: string;
}

export interface NewsEventPage extends SanityBody {
  _type: "newsEventPage";

  certificateEvents: certificateEvent[];
  alumniEvents: alumniEvent[];
  newsEvents: newsEvent[];
}
