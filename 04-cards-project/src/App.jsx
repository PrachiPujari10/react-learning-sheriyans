import React from 'react'
import Card from './components/Card'
// import User from './components/User'

const App = () => {

  const jobOpenings = [
    {
      brandlogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwuwyyUw-fo6LXy7IuoR0fnqY4I9yGGqM9A&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "iOS Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-b-GRJP49S_nvl8UDCQ2DDusVBUmQcN1Ug&s",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Data Scientist",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlC4NrtlMbyFcSynG0EQ1wdV9mvfrzJNpRJw&s",
      companyName: "Google",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJP7X_crOPPYfdGyvHw8KhkxswWPubv8P4w&s",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Full Stack Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/960px-Adobe_Corporate_logo.svg.png",
      companyName: "Adobe",
      datePosted: "1 day ago",
      post: "UI/UX Designer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
      companyName: "Spotify",
      datePosted: "10 days ago",
      post: "Mobile App Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, index) => {
        return (
          <Card 
            key={index}
            company={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag}
            tag2={elem.tag2}
            brandlogo ={elem.brandlogo}
            pay={elem.pay}
          />
        )
      })}
    </div>
  )
}

export default App