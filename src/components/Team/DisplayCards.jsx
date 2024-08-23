import React from 'react';
import Card from '../C/Card.jsx';
import IMG from "../../assets/images/Kamado.Tanjirou.600.2883168.jpg"

const people = [
  {
    image: IMG,
    name: 'Person 1',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 2',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 3',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 4',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 5',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 6',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ]
  },
  {
    image: IMG,
    name: 'Person 7',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  },
  {
    image: IMG,
    name: 'Person 8',
    role: 'Frontend Developer',
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square-Dark.png" },
      {name: 'Github', url: 'https://github.com', icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"}
    ],
  }
];

const CardList = () => (
  <div className="card-list">
    {people.map((person, index) => (
      <Card
        key={index}
        image={person.image}
        name={person.name}
        role={person.role}
        socialLinks={person.socialLinks}
      />
    ))}
  </div>
);

export default CardList;
