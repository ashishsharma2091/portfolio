import React, {Component} from 'react'
import ProjectsWidecard from '../components/ProjectWidecard'
import bol from '../img/bol.png';
import ls from '../img/LS.jpg';
import unirisx from '../img/unirisx.jpg';
import ms3 from '../img/ms3.jpg';
import project from '../img/pic6.jpg';


class Projects extends Component {
    render() {
        return (
            <div className="condiv" style={{
                backgroundColor: '#ffffff',
                color: '#000000'
              }}>
     
                <img src={project} alt="projectpic"></img>
                <div className="projects">
                    
                    <ProjectsWidecard image={bol} 
                    title="Bank Of Ireland" 
                    time="Bussiness On Line, Feb 19 - Till date"
                    tech="[Core Java, Spring Web flow,Rest Web Service,  JSF, Java Sript SQL , Jenkins]"
                     desc="The project dealt with Banking applications for corporate and Retail banking . BOL and Bank of Ireland 365 Online is a banking application that offers user the convenience and flexibility to do your day-to-day banking online at any time or in any place that suits Users, It’s convenient way to access your accounts online, Check balances, pay bills, view statements and more. "/>
                    
                
                    <ProjectsWidecard image={ls}
                    title="Bank of Montreal " 
                    time="Leasing Source and Alternate Funding , May 2016- Nov 2017 "
                    tech="[Core Java, Servlets, JS, JSP and spring framework]"
                     desc="Bank of Montreal uses the above system/application for its transport lease and loan business to serve the dealers. Leasing Source application provide facility to the dealers to submit deals of lease and loan business to BMO. It also generates reports and facilitates payment options. 
                    Alternate Funding application provides facility if bmo rejects any lease or loan request then it calls for alternate fundings and request some external dealers to look into applications and provide their services to the customers. "/>

                   
                    <ProjectsWidecard image={unirisx}
                    title="Beazley" 
                    time="Unirisx, January 2015- April 2016 "
                    tech="[Core Java, Servlets, JavaScript, SQL, JSP]"
                    desc="This application is used to manage the activities of Insurance industries (Beazley) like creating and maintaining Policy, Quote, Bind, Renew and Endorsement of policies. Manage the data of insured related to policy and coverages. "/>

                </div>

                <div className="projects">

                   
                    <ProjectsWidecard image={ms3}
                    title="American Express" 
                    time="Merchant Sales and Servicing System (MS3), January 2014 - January 2015"
                    tech="[Core Java, Servlets, JS, JSP and Struts framework]"
                    desc="American Express uses the above the system/application to serve the merchant. This application maintains the data of Merchants like Banking information, Pending/Paid transactions, Hierarchy information, Address, Cases etc. and all the post maintenance of the merchant’s information. "/>

                    </div>

                   
            </div>    
        )
    }
}

export default Projects