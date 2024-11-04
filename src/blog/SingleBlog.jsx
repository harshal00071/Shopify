import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setblog] = useState(blogList);
  const { id } = useParams();
  const results = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeader title={"Single Blog Page"} currPage={"Blog/Blog-Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {results.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Hic sed asperiores assumenda
                                  perspiciatis saepe, ducimus nulla maiores est.
                                  Laudantium, blanditiis architecto. Aspernatur,
                                  doloremque sunt minus iure excepturi neque,
                                  voluptatum debitis harum culpa, unde dicta
                                  similique. Aliquam, pariatur dignissimos, quae
                                  nisi optio voluptate quas dolores vel quidem
                                  ab ipsa odio sed, voluptatum possimus quis?
                                  Similique harum veniam facilis eum! Nemo alias
                                  sit exercitationem quo quae. Fugiat facere id
                                  repellendus quis adipisci ab suscipit aperiam
                                  debitis, architecto qui aut illo commodi
                                  voluptatem est iste minima quod? Aliquam
                                  distinctio exercitationem laborum dolor
                                  necessitatibus, fugiat sit ipsa nihil id ipsam
                                  eos doloribus! Voluptatibus, adipisci.
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recaptialiuze distributed
                                    technologies is whereas turnkey channels and
                                    onntonecally provide access to resouce
                                    levellung expertise vias worldwide
                                    deliverablies unolisticly exted arerser are
                                    diverse volatils
                                  </p>
                                  <cite>
                                    <a href="#">..Mellisa hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Ad debitis iusto reiciendis
                                  inventore corporis, sequi sit, quae
                                  repellendus ipsa pariatur nemo nihil! Quae
                                  consequuntur earum nihil harum, eaque
                                  laboriosam nobis sit nam veniam a animi
                                  cupiditate. Nemo sapiente cupiditate id!
                                  Nesciunt ex perferendis magni, laudantium
                                  voluptate consequatur, vel beatae in dolores
                                  sequi provident natus corrupti libero deleniti
                                  quod fugiat expedita? Rem quam illum similique
                                  quaerat animi doloremque! Cum, sequi nobis
                                  dolor numquam vero corporis quod aperiam modi
                                  saepe, accusantium voluptatum?
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Consequuntur ipsam itaque
                                  aspernatur incidunt debitis ipsum voluptate
                                  id, laborum, dolor, dignissimos nostrum nam
                                  quaerat odit. Temporibus eligendi explicabo
                                  quisquam ducimus eaque aspernatur unde culpa
                                  repudiandae maxime cum aperiam eos aliquam
                                  quia nobis quis doloribus aut a sint, fugit
                                  dolore. Quo voluptas architecto deleniti natus
                                  praesentium? Ex temporibus vel, nihil
                                  necessitatibus reprehenderit similique quam
                                  natus a obcaecati voluptates debitis error.
                                  Quod, repellendus blanditiis unde quo modi
                                  illum quibusdam? Sit itaque quae optio ratione
                                  omnis ipsum, quibusdam eius quia impedit
                                  assumenda dolor blanditiis.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    className="video-button popup"
                                    target="_blank"
                                    href="https://www.youtube.com/watch?v=PGuKjkdGrEI&t=11381s"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Quod, explicabo expedita
                                  maiores, soluta id eveniet error est illum
                                  itaque dicta adipisci? Natus minus, laudantium
                                  eos sunt aliquam suscipit repellendus,
                                  inventore sapiente architecto aspernatur dolor
                                  unde minima repellat quo. Quam similique
                                  aliquam necessitatibus expedita aliquid
                                  explicabo pariatur blanditiis est iusto
                                  quidem.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Buisness</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>Previous blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Visa Technicia Sound
                            Modals Authorative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i>Next blog
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes Visa Technicia Sound
                            Modals Authorative
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
