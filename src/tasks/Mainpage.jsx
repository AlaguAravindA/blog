import React from 'react'
import {image1,image2,image3,image4,download,image5,image6,image7,image8,image9} from'./demo';
import { useState } from 'react';



export default function Mainpage() {
   const arrtitle=["Cosmic Adventures: Exploring the Universe's Mysteries","Epicurean Delights: A Culinary Journey",
  "Wanderlust Chronicles: Tales of Travel and Exploration",
  "Tech Innovations: Shaping the Future Today",
  "Eco Warriors: Saving the Planet One Step at a Time",
  "The Artistic Soul: Creativity Unleashed",
  "Mind Matters: Navigating the Depths of Psychology",
  "Hidden Histories: Unearthing Forgotten Legends",
  "Musical Odyssey: Harmonies and Melodies",
  "Adrenaline Rush: Thrills, Chills, and Adventures"]

  const content=["Embark on a cosmic journey as we explore the universe's mysteries. From the basics of stargazing and the enigmatic forces of dark matter and dark energy to the history of telescopes and the future of space exploration, we'll delve into black holes, search for extraterrestrial life, understand the life cycles of stars, and contemplate the origins of the universe. Join us in our cosmic adventure to unravel the wonders of the cosmos, capture its beauty through astrophotography, and ponder the philosophical implications of our place in the grand scheme of the universe. We'll also highlight recent discoveries, discuss space sustainability, and inspire the next generation of cosmic explorers while celebrating the universe's influence on popular culture. Don't miss our celestial events calendar, guiding you to meteor showers, eclipses, and planetary alignments, and remember that the universe's mysteries not only expand our knowledge but also awaken our sense of wonder and inspiration.","Savor the flavors and textures of a culinary expedition through Epicurean Delights. From delectable recipes and food pairings to the stories behind the world's cuisines, we'll indulge in a gastronomic adventure that transcends borders and titillates the taste buds. Join us in exploring the art and science of cooking, culinary travel experiences, and the cultural significance of food, as we embark on a mouthwatering journey into the world of epicurean delights.","The Wanderlust Chronicles will ignite your wanderlust and transport you to the most breathtaking corners of the globe. Our tales of travel and exploration feature vivid descriptions, travel tips, and unforgettable experiences. Join us as we traverse diverse landscapes, immerse ourselves in local cultures, and share the joy of wanderlust, all while discovering the world's hidden gems and extraordinary adventures.","In Tech Innovations, we delve into the exciting world of technology that is shaping the future today. From cutting-edge innovations in artificial intelligence and robotics to the latest developments in renewable energy and space exploration, we explore the ever-evolving landscape of technology. Join us in understanding the impact of tech on our lives and envisioning the possibilities of tomorrow as we navigate through the fascinating realm of innovation.","Eco Warriors is your portal to the world of environmental advocacy and sustainable living. Here, we celebrate the unsung heroes fighting to protect our planet and offer practical insights into reducing our ecological footprint. Join us in discovering innovative solutions to pressing environmental challenges, embracing eco-friendly lifestyles, and championing the cause of saving the planet one step at a time.","Unleash your creative spirit with The Artistic Soul, where we celebrate all forms of artistic expression. From visual arts and literature to music and performance, we explore the boundless realms of creativity. Join us in appreciating the artistic process, discovering emerging talents, and gaining insights into the artistic movements that shape our world, all while igniting your own passion for the arts.","Dive into the depths of the human psyche with Mind Matters, where we explore the fascinating realm of psychology. From understanding the intricacies of mental health and well-being to unraveling the mysteries of human behavior, we embark on a journey of self-discovery and insight. Join us in navigating the complexities of the mind, promoting mental health awareness, and gaining a deeper understanding of the forces that shape our thoughts, emotions, and behaviors.","Hidden Histories is your gateway to the forgotten tales and overlooked legends of our world. We uncover intriguing stories, uncharted territories, and the unsung heroes of history. Join us in unearthing the mysteries, myths, and historical narratives that have shaped our past and continue to influence our present, offering fresh perspectives on the tapestry of human history.","Embark on a harmonious journey through the world of music with Musical Odyssey. From classical compositions to contemporary tunes, we explore the diverse genres, artists, and cultural influences that have shaped the music we love. Join us in celebrating the power of melodies and harmonies to evoke emotions, inspire creativity, and unite people across the globe, as we traverse the enchanting landscapes of sound."]
  const [title,settitle]=useState()

  function handleContent(e,cardId){
  
  e.preventDefault();
  settitle(cardId);

  

}

  return (
    <div >
        <div class="container text-center">
  <div class="row mb-5 mt-5 ">
    <div class="col">
<div class="card " style={{width:"18rem;"}}>
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
   

    <h5 class="card-title"     id='0'>{arrtitle[0]}</h5>
    <p class="card-text"> Embark on a journey through the cosmos as we delve into the awe-inspiring wonders of space and astronomy.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,0)}}>
 Know More
</button>
   
  </div>
</div>
    </div>
    <div class="col">
<div class="card" style={{width:"18rem;"}}>
  <img src={download} class="card-img-top" alt="..." style={{height:'400px'}}/>
  <div class="card-body">
    <h5 class="card-title"  >{arrtitle[1]}</h5>
    <p class="card-text">Join us on a gastronomic adventure, savoring the flavors of diverse cuisines and unraveling the secrets of exquisite cooking</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,2)}}>
 Know More
</button>
  </div>
</div>
    </div>
  </div>
  <div class="row  mb-5 mt-5">
    <div class="col">
<div class="card" style={{width:"18rem;"}}>
  <img src={image2} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title"  >{arrtitle[2]}</h5>
    <p class="card-text">Discover captivating travel stories from around the world, inspiring your inner wanderer to explore new horizons.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,2)}}>
 Know More
</button>
  </div>
</div>
    </div>
    <div class="col">
<div class="card" style={{width:"18rem;"}}>
  <img src={image3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >{arrtitle[3]}</h5>
    <p class="card-text">Stay at the forefront of technology trends and innovations that are reshaping our world and driving progress</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,3)}}>
 Know More
</button>
  </div>
</div>
    </div>
    <div class="col">
<div class="card" style={{width:"18rem;"}}>
  <img src={image4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >{arrtitle[4]}</h5>
    <p class="card-text"> Learn how individuals and communities are championing environmental causes and working toward a sustainable future.</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,4)}}>
 Know More
</button>
  </div>
</div>
    </div>
  </div>
</div>

<div class="container text-center">
  <div class="row  mb-5 mt-5">
    <div class="col">
    <div class="card" style={{width:"18rem;"}}>
  <img src={image5} class="card-img-top" alt="..." style={{height:'400px'}}/>
  <div class="card-body">
    <h5 class="card-title"  >{arrtitle[5]}</h5>
    <p class="card-text">Immerse yourself in the world of art, where creativity knows no bounds, and artistic expression takes center stage.</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,5)}}>
 Know More
</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem;"}}>
  <img src={image6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >"Mind Matters: Navigating the Depths of Psychology</h5>
    <p class="card-text">Dive into the complexities of the human mind, exploring psychology's intriguing facets and the mysteries of the psyche</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,6)}}>
 Know More
</button>
  </div>
</div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div class="card" style={{width:"18rem;"}}>
  <img src={image7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >Hidden Histories: Unearthing Forgotten Legends</h5>
    <p class="card-text"> Uncover the untold stories and forgotten legends from the annals of history, shedding light on remarkable events of the past.</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,7)}}>
 Know More
</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem;"}}>
  <img src={image8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >Musical Odyssey: Harmonies and Melodies</h5>
    <p class="card-text"> Journey through the world of music, where melodies and harmonies intertwine to create unforgettable sonic experiences</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,8)}}>
 Know More
</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem;"}}>
  <img src={image9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"  >Adrenaline Rush: Thrills, Chills, and Adventures</h5>
    <p class="card-text"> Brace yourself for adrenaline-pumping escapades and thrilling adventures that will leave you on the edge of your seat.</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={(e)=>{handleContent(e,9)}}>
 Know More
</button>
  </div>
</div>
    </div>
  </div>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{arrtitle[title]}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {content[title]}        
       
             </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  
      </div>
    </div>
  </div>
</div>

</div>
</div>


  )
}
