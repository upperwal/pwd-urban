import { React } from 'react';
import { Link } from 'react-router-dom';
import './Dashboards.scss';

function Dashboards(props) {

    console.log(props.match.params.id)

    let id = props.match.params.id

    const data = [
        {
            title: 'State/UT-wise PWD in urban India, 2011',
            desc: 'The 8 million PWD are shown as percentage share of PWD to state urban population and as share of national urban population.',
            source: 'Census of India, 2011',
            insight: 'Maharashtra and Uttar Pradesh together formed 28% of urban India’s disabled population, which approximately equalled the share of all southern states.',
            link: 'https://iuo.mohua.gov.in/portal/apps/opsdashboard/index.html#/cd9cca92a0f54a38a074e22511afac85'
        },
        {
            title: 'State/UT-wise PWD in urban India by gender, 2018',
            desc: 'The data shows PWD as actual numbers disaggregated by male and female sex as well by share of state urban population.  ',
            source: '76th round of NSS on Persons With Disabilities',
            insight: 'Percentage share of male PWD in urban India was 17% greater than percentage share of female PWD as of 2018. ',
            link: 'https://iuo.mohua.gov.in/portal/apps/opsdashboard/index.html#/6ac5d1660d41449bbf7a10b2d514f01b'
        },
        {
            title: 'State/UT-wise share of PWD in urban India by major age groups, 2018',
            desc: 'The data shows percentage of PWD as share of urban population of each state, disaggregated by three age groups – children & adolescents (0-19 years), working age (20-64 years), and old age population (65+ years). ',
            source: '76th round of NSS on Persons With Disabilities',
            insight: 'While 10.5% of all 65+ years populations had some disability, the prevalence among children and adolescents was only 1% as of 2018.',
            link: 'https://iuo.mohua.gov.in/portal/apps/opsdashboard/index.html#/d27b3cfeafa04e08b5f5ea6e1c371f51'
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
        {
            title: '',
            desc: '',
            source: '',
            insight: '',
            link: ''
        },
    ]

    function renderNav() {
        let li = []
        for(let i=0; i<11; i++) {
            li.push(
                <Link key={i} to={'/dashboards/' + i}><li>{i+1}</li></Link>
            )
        }
        return li
    }

    return (
        <div className="Dashboards">
            <div className="navigation">
                <div className="container">
                    <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                        {renderNav()}
                    </ul>
                </div>
            </div>
            <div className="title">
                <div className="container">
                    <h1>{data[id].title}</h1>
                </div>
            </div>
            <div className="description">
                <div className="container">
                    <p><b>Description:</b> {data[id].desc}</p>
                    <p><b>Data Source:</b> {data[id].source}</p>
                    <p><b>Insight:</b> {data[id].insight}</p>
                </div>
            </div>
            <div className="iframe-container">
                <iframe src={data[id].link} frameBorder="0"></iframe>
            </div>
        </div>
    );
  }
  
  export default Dashboards;