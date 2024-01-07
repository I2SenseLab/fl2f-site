interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _id: string;
  _type: "image";
  name: string;
  asset: {
    _ref: string;
    type: "reference";
  };
}

export interface LearnMore extends SanityBody {
  _type: "learnMore";
  title: string;
  upcomingCourseStart: date;
  upcomingCourseEnd: date;
  costBlock: text[];
  cancelBlock: text[];
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

export interface AlumniEvent extends SanityBody {
  _type: "alumniEvent";
  title: string;
  alumniImage: Image;
  date: date;
}

export interface CertificateEvent extends SanityBody {
  _type: "certificateEvent";
  title: string;
  certificateImage: Image;
  date: date;
}

export interface NewsEvent extends SanityBody {
  _type: "newsEvent";
  date: date;
  title: string;
  description: string;
  link: string;
}

export interface NewsEventsPage extends SanityBody {
  _type: "newsEventsPage";

  certificateEvents: CertificateEvent[];
  alumniEvents: AlumniEvent[];
  newsEvents: newsEvent[];
}

export interface FAQ extends SanityBody {
  _type: "faq";
  title: string;
  faqs: {
    question: string;
    answer: text;
  }[];
}

export interface Person extends SanityBody {
  _type: "person";
  name: string;
  title: string;
  description: string;
  testimony: string;
  image: ImageWithHotspot;
  order: number;
}

export interface PeopleList extends SanityBody {
  _type: "peopleList";
  title: string;
  futured: Person[];
  testimonials: Person[];
  recommendations: Person[];
}