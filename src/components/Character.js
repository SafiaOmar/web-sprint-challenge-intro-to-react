import React from 'react';




const charApp = (props) => {
  
    return(
      <section>
           {
               <article>
               <p>Name: {props.character.name}  Birth Year:{props.character.birth_year}</p>
               </article>
               
             
            }
      </section>   
    );
  }


export default charApp;