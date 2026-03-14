'use client';
import styles from './page.module.css'

export default function projects() {
  
  const projects = [
    {title: 'Diet Builder', image : '/MacroApp.png', link : 'https://meal-app-c2a6278c79d2.herokuapp.com/password-required', description : 'A web app to build meals, track your macronutrients, save recipes, and more.'},
    {title: ' Not Available', image : '/coming_soon.png', link : 'https://not-a-real-link', description : 'No description, app coming soon'},
    { title: 'Not Available', image : '/coming_soon.png', link : 'https://not-a-real-link', description : 'No description, app coming soon'
    }
    
  ];
  return (
  <div className={styles.projectPage}>
    
    
    


   <div  className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {projects.map(({ title, image, link, description }) => (
   
    <div key={title} className="bg-gray-800 shadow rounded-lg rounded-lg shadow hover:shadow-lg transition">
      <a href={link}>
        <img
          src={image}
          alt={title}
           className="w-full h-48 object-cover rounded-t-lg"

         
        />
        <div className="p-4">
          <h3 className="text-lg text-white font-bold">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </a>
    </div>

  ))}
</div>




  </div>
  )
}
