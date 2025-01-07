import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.jpg";
import brand_img from "./brand_img.jpg";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export interface Project {
  title: string;
  price: string;
  location: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "For any budget",
    price:
      "From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.",
    location: "California",
    image: project_img_1,
  },
  {
    title: "For any distance",
    price:
      "Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "For any duration",
    price:
      "Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Airport Rides",
    price:
      "It has a easiest booking process.Let's get you to and fro the airport on time,without stress.",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    title: "Hourly Rentals",
    price: "You can get to travel faster without any deviations",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    title: "Outstation Rides",
    price:
      "Hop on board for your out-of-town ride with us and experience the difference.",
    location: "Chicago",
    image: project_img_6,
  },
];

interface Testimonial {
  name: string;
  title: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];
