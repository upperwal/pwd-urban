import { React } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import HeaderImg from './img/header_bg.png';
import poster from './img/poster.png';

function Home() {

    const cat = [
        "by Census, 2011",
        "by gender, 2018",
        "by major age-groups, 2018",
        "by types of disabilities, 2018",
        "who were advised aid/appliances and acquired aid/appliances, 2018",
        "who were living alone, 2018",
        "by regular caregiver access, 2018",
        "by the status of treatment taken, 2018",
        "who have certificate of disability, 2018",
        "who faced difficulties while accessing public transport, 2018",
        "who faced difficulties while accessing public building, 2018"
    ]

    function renderCat() {
        let rows = []
        let cols = []
        cat.forEach((element, idx) => {
            cols.push(
                <div className="col-md-6" key={idx}>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="number">
                            <span>{idx+1}</span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Link to={'/dashboards/' + idx}><span className="categories">{element}</span></Link>
                    </div>
                    </div>
                    
                    
                </div>
            )
            if(cols.length == 2) {
                rows.push(
                    <div className="row cat-rows">
                        {cols}
                    </div>
                )
                cols = []
            }
        });

        rows.push(
            <div className="row cat-rows">
                {cols}
            </div>
        )

        return rows
    }

    return (
        <div className="Home">
            <header className="header">
                <img src={HeaderImg} alt=""/>
            </header>
            <div className="content-body">
                <div className="row">
                    <div className="col-md-3">
                        <h1>About</h1>
                        <p>The 76th round of National Sample Survey (2018) has released a survey on differently abled persons (Divyangs) in India. In line with the Ministry’s vision for the annual Handbook of Urban Statistics, researchers at the National Institute of Urban Affairs (NIUA) have taken this opportunity to present data on disability in urban context, in a useable format.  </p>
                        <p>This dashboard displays the state/UT-wise distribution of Persons with Disability (PWD) in Urban India based on statistics from Census Survey of India (2011) and 76th round of NSS on persons with disabilities (2018). “Person with disability” (PWD) here refers to a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his/her full and effective participation in society equally with others (PWD Act, 2016). </p>
                    </div>
                    <div className="col-md-5">
                        <h2>State/UT-wise distribution of Persons With Disabilities (PWD)</h2>
                        {/* <div className="row">
                            <div className="col-md-6">
                                <div className="number">
                                    <span>1</span>
                                </div>
                                <a href=""><span className="categories">by Census, 2011</span></a>
                            </div>
                            <div className="col-md-6">
                                <div className="number">
                                    <span>2</span>
                                </div>
                                <a href=""><span className="categories">by gender, 2018</span></a>
                            </div>
                        </div> */}

                        {renderCat()}
                    </div>
                    <div className="col-md-4">
                        <img className="poster" src={poster} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;