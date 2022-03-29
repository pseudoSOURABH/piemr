import React from "react";
import "./DSA.css";
import ds from "./dsa1.jpg";
import abt from "./abt.jpg";
import q from "./queue.png";
import cq from "./cirqueue.png";
import stck from "./stck1.jpg";
import algo from "./algo.jpg";
import arr from "./arr.png";
import ll1 from "./ll1.png";
import ll2 from "./ll2.png";
import ll3 from "./ll3.png";
import tree from "./tree.png";
import bnrtree from "./bnrtree.png";
import bnrstree from "./bnrsrtree.png";
import graph from "./graph.png";
import avl from "./avltree.jpg";
import heap from "./heap.jpg";

import { NavLink } from "react-router-dom";
export const DSA = () => {
  return (
    <>
      <div className="alldsaitem">
        <div className="packet">
          <h2>introduction</h2>
        
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={ds} />
              <p>DATA STRUCTURE</p>
            </div>
          </NavLink>
          <NavLink  to="/Data-structure/Algorithm">
          <div>
              <img className="dsaitem" src={algo} />
              <p>ALGORITHM</p>
            </div>
          </NavLink>

          <NavLink  to="/Data-Structure/Abstract-DataType">
          <div>
              <img className="dsaitem" src={abt} />
              <p>ABSTRACT DATA-TYPE</p>
            </div>
          </NavLink>
            
          </div>
        </div>
        <div div className="packet">
          <h2>Linear Data Structure</h2>
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={arr} />
              <p>ARRAY</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={stck} />
              <p>STACK</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={q} />
              <p>QUEUE</p>
            </div>
          </NavLink>
          </div>
        </div>
        <div className="packet">
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={cq} />
              <p>CIRCULAR QUEUE</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={ll1} />
              <p>LINKED LIST</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={ll2} />
              <p>DOUBLY LINKED-LIST</p>
            </div>
          </NavLink>
          </div>
        </div>
        <div className="packet">
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={ll3} />
              <p>CIRCULAR LINKED-LIST</p>
            </div>
          </NavLink>
          </div>
        </div>
        <div className="packet nonlnr">
          <h2>Non-Linear Data-Structure</h2>
          <div className="dsaitemrow ">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={tree} />
              <p>TREE</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={graph} />
              <p>GRAPH</p>
            </div>
          </NavLink>
          </div>
        </div>

        <div className="packet">
          <h2>Types of Tree</h2>
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={bnrtree} />
              <p>BINARY TREE</p>
            </div>
          </NavLink>
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={bnrstree} />
              <p>BINARY SEARCH TREE</p>
            </div>
          </NavLink>

          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={avl} />
              <p>AVL TREE</p>
            </div>
          </NavLink>
          </div>
        </div>
        <div className="packet">
          <div className="dsaitemrow">
          <NavLink  to="/Home">
          <div>
              <img className="dsaitem" src={heap} />
              <p>HEAP TREE</p>
            </div>
          </NavLink>
          </div>
        </div>
      </div>
      {/* <div>following is the playlist of data structure</div>
      <div className="vitems" width="500" height="300">
        <NavLink to="/Data-Structure">
          <img  src={ds} alt="not loaded" />
        </NavLink>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sk0yrh3DNXo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </>
  );
};
