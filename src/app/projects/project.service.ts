import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  Projects:any=[
    {
      id:1,
      url:"assets/codinghub.mp4",
      title:"WayPoint",
      about:"Revolutionizing US Navy ship management with advanced technology for optimized port operations",
      disp:` "WayPoint" is an advanced ship management system meticulously crafted to address the multifaceted needs of 
      every crew member during port stops. Tailored exclusively for the USA Navy, it integrates cutting-edge technology
      to streamline and optimize various ship operations, including logistics, maintenance, and crew management`,
      link: "https://hsp.waypoint-global.com/",
      links : [
        { text: 'Link 1', iconVisible: false },
        { text: 'Link 2', iconVisible: false },
      ],
    },
    {
      id:3,
      url:"assets/fujiraha.mp4",
      link:"https://fuj-hr.ae/home",
      title:"Arbab",
      about:"It is a Software company for building many softwares for people",
      disp:"Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes the physical aspects of a compute",
      links : [
        { text: 'Link 1', iconVisible: false },
        { text: 'Link 2', iconVisible: false },
      ],
    },
    {
      id:2,
      url:"assets/codinghub.mp4",
      link :"https://romtix.com",
      title:"Romtix.com",
      about:" Your all-in-one hospital management software for seamless patient record management, doctor appointment bookings, and insightful report generation",
      disp:`Romtix.com is a comprehensive hospital management software designed to streamline operations efficiently. It offers seamless patient record management, 
      simplifying the daily tasks of healthcare professionals. With a user-friendly interface, it facilitates easy doctor appointment bookings, ensuring a smooth scheduling process`,
      links : [
        { text: 'Link 1', iconVisible: false },
        { text: 'Link 2', iconVisible: false },
      ],
    
    },
    {
      id:3,
      url:"assets/codinghub.mp4",
      link:"https://codinghubpro.com/home",
      title:"CodingHub",
      about:"Your premier destination for mobile app development, web applications, and innovative software solutions.",
      disp:`CodingHub is more than just a software company website; it's a gateway to exploring our extensive portfolio. 
      Each project has its own dedicated page, meticulously detailing its functionality, features, and innovative solutions.
       Dive deeper into our projects, meet the unique needs of each client. Which is very Helpfull for us`,
      links : [
        { text: 'Link 1', iconVisible: false },
        { text: 'Link 2', iconVisible: false },
      ],
    
    },
    // {
    //   id:4,
    //   url:"assets/codinghub.mp4",
    //   title:"Al-Saeed Medical Complex System",
    //   about:"This Software for Al-Saseed Hospital for patient ",
    //   disp:"Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes the physical aspects of a compute"
    // },
    // {
    //   id:5,
    //   url:"assets/codinghub.mp4",
    //   title:"Al-Azizia Estate",
    //   about:"Al-Azizia Estate is housing scheme provide all facilities to people for living good life",
    //   disp:"Software is a set of instructions, data or programs used to operate computers and execute specific tasks. It is the opposite of hardware, which describes the physical aspects of a compute"
    // }
  ]
}
