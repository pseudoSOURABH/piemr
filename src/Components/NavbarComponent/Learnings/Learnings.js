import { dblClick } from "@testing-library/user-event/dist/click";
import React from "react";
import "./Learnings.css";
import cpp from "./c++.png";
import c from './c.png';
import AI from './AI.png';
import { Navigate, useNavigate,Router, NavLink,Routes} from "react-router-dom";



export const Learnings = () => {
 let Nevigate=useNavigate();
  const ClickOnC=()=>{
    
  }
  return (
    
      <div className="learningpage">
      <div className="learncontain">
        <div className="techno" >
          <h2>Programming Languages</h2>
          <div className="grid-container">
            <div className="grid-item" >
             <NavLink  to="/learnings/C">
             <img src={cpp} alt="not loaded" />
              <p>c programming</p>
             </NavLink>
            </div>
            <div className="grid-item" onClick={()=>{console.log('cpp')}}>
              <img src={c} alt="not loaded" />
              <p>c++</p>
            </div>
            <div className="grid-item">
              <img src={AI} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
            <div className="grid-item">
              <img src={cpp} alt="not loaded" />
            </div>
          </div>
        </div>

        <div className="articles">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eius
          repudiandae animi tempora. Rem iure reprehenderit cum eius assumenda
          in error aliquam libero eveniet labore ex tempore impedit nemo a autem
          hic porro corrupti consectetur quaerat accusantium, enim soluta
          inventore culpa! Saepe nobis voluptatum est sunt nisi officiis
          corrupti nulla similique ad placeat sed blanditiis numquam vel illum
          alias, adipisci voluptatem cumque. Quia deleniti eaque sapiente
          delectus, tenetur porro aut necessitatibus? Illum adipisci inventore
          exercitationem quis? In aut veritatis quisquam eum tempora iste sequi,
          recusandae odio ipsum eaque tempore officiis doloremque minima ex
          eligendi, nostrum perspiciatis voluptate voluptatem cupiditate.
          Numquam?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Architecto aliquid illum quisquam libero nihil! Recusandae ad animi
          quas velit aliquid, qui sed blanditiis repellat, illo consectetur
          dignissimos voluptatibus, soluta incidunt dolor porro. Animi dolore,
          alias libero eius laudantium saepe pariatur deserunt, eveniet,
          officiis ex reprehenderit atque quidem perspiciatis! Nam placeat id
          doloremque nostrum quidem totam quis aspernatur. Architecto facere
          aliquid, maiores inventore omnis ut nobis cum iusto, pariatur suscipit
          sequi obcaecati, quam porro natus dolores harum. Iste, iure architecto
          autem beatae tenetur incidunt unde eius, optio facere provident
          dolorum inventore molestias fugiat nulla delectus, corrupti sit id
          distinctio animi tempora.
        </div>
      </div>

      <div className="learncontain">
      
      <div className="techno">
      <h2>Cloud-Computing</h2>
        <div className="grid-container">
         
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
        </div>
      </div>

      <div className="articles">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eius
        repudiandae animi tempora. Rem iure reprehenderit cum eius assumenda in
        error aliquam libero eveniet labore ex tempore impedit nemo a autem hic
        porro corrupti consectetur quaerat accusantium, enim soluta inventore
        culpa! Saepe nobis voluptatum est sunt nisi officiis corrupti nulla
        similique ad placeat sed blanditiis numquam vel illum alias, adipisci
        voluptatem cumque. Quia deleniti eaque sapiente delectus, tenetur porro
        aut necessitatibus? Illum adipisci inventore exercitationem quis? In aut
        veritatis quisquam eum tempora iste sequi, recusandae odio ipsum eaque
        tempore officiis doloremque minima ex eligendi, nostrum perspiciatis
        voluptate voluptatem cupiditate. Numquam?Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto aliquid illum quisquam libero
        nihil! Recusandae ad animi quas velit aliquid, qui sed blanditiis
        repellat, illo consectetur dignissimos voluptatibus, soluta incidunt
        dolor porro. Animi dolore, alias libero eius laudantium saepe pariatur
        deserunt, eveniet, officiis ex reprehenderit atque quidem perspiciatis!
        Nam placeat id doloremque nostrum quidem totam quis aspernatur.
        Architecto facere aliquid, maiores inventore omnis ut nobis cum iusto,
        pariatur suscipit sequi obcaecati, quam porro natus dolores harum. Iste,
        iure architecto autem beatae tenetur incidunt unde eius, optio facere
        provident dolorum inventore molestias fugiat nulla delectus, corrupti
        sit id distinctio animi tempora.
      </div>
    </div>

    <div className="learncontain">
      
      <div className="techno">
      <h2>Preparation</h2>
        <div className="grid-container">
         
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
        </div>
      </div>

      <div className="articles">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eius
        repudiandae animi tempora. Rem iure reprehenderit cum eius assumenda in
        error aliquam libero eveniet labore ex tempore impedit nemo a autem hic
        porro corrupti consectetur quaerat accusantium, enim soluta inventore
        culpa! Saepe nobis voluptatum est sunt nisi officiis corrupti nulla
        similique ad placeat sed blanditiis numquam vel illum alias, adipisci
        voluptatem cumque. Quia deleniti eaque sapiente delectus, tenetur porro
        aut necessitatibus? Illum adipisci inventore exercitationem quis? In aut
        veritatis quisquam eum tempora iste sequi, recusandae odio ipsum eaque
        tempore officiis doloremque minima ex eligendi, nostrum perspiciatis
        voluptate voluptatem cupiditate. Numquam?Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto aliquid illum quisquam libero
        nihil! Recusandae ad animi quas velit aliquid, qui sed blanditiis
        repellat, illo consectetur dignissimos voluptatibus, soluta incidunt
        dolor porro. Animi dolore, alias libero eius laudantium saepe pariatur
        deserunt, eveniet, officiis ex reprehenderit atque quidem perspiciatis!
        Nam placeat id doloremque nostrum quidem totam quis aspernatur.
        Architecto facere aliquid, maiores inventore omnis ut nobis cum iusto,
        pariatur suscipit sequi obcaecati, quam porro natus dolores harum. Iste,
        iure architecto autem beatae tenetur incidunt unde eius, optio facere
        provident dolorum inventore molestias fugiat nulla delectus, corrupti
        sit id distinctio animi tempora.
      </div>
    </div>

    <div className="learncontain">
      
      <div className="techno">
      <h2>Trending Technologies</h2>
        <div className="grid-container">
         
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
          <div className="grid-item">
            <img src={cpp} alt="not loaded" />
          </div>
        </div>
      </div>

      <div className="articles">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eius
        repudiandae animi tempora. Rem iure reprehenderit cum eius assumenda in
        error aliquam libero eveniet labore ex tempore impedit nemo a autem hic
        porro corrupti consectetur quaerat accusantium, enim soluta inventore
        culpa! Saepe nobis voluptatum est sunt nisi officiis corrupti nulla
        similique ad placeat sed blanditiis numquam vel illum alias, adipisci
        voluptatem cumque. Quia deleniti eaque sapiente delectus, tenetur porro
        aut necessitatibus? Illum adipisci inventore exercitationem quis? In aut
        veritatis quisquam eum tempora iste sequi, recusandae odio ipsum eaque
        tempore officiis doloremque minima ex eligendi, nostrum perspiciatis
        voluptate voluptatem cupiditate. Numquam?Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Architecto aliquid illum quisquam libero
        nihil! Recusandae ad animi quas velit aliquid, qui sed blanditiis
        repellat, illo consectetur dignissimos voluptatibus, soluta incidunt
        dolor porro. Animi dolore, alias libero eius laudantium saepe pariatur
        deserunt, eveniet, officiis ex reprehenderit atque quidem perspiciatis!
        Nam placeat id doloremque nostrum quidem totam quis aspernatur.
        Architecto facere aliquid, maiores inventore omnis ut nobis cum iusto,
        pariatur suscipit sequi obcaecati, quam porro natus dolores harum. Iste,
        iure architecto autem beatae tenetur incidunt unde eius, optio facere
        provident dolorum inventore molestias fugiat nulla delectus, corrupti
        sit id distinctio animi tempora.
      </div>
    </div>
    </div>

    
  );
};
