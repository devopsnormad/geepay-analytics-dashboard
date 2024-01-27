import React from 'react'
import Navbar from '../components/Navbar'
import VictoryBarChart from '../components/Charts'
import boxIcon from '../images/box-tick.png'
import rotateIcon from '../images/3d-rotate.png'
import cartIcon from "../images/shopping-cart.png"
import coinIcon from '../images/coin.png'
import image1 from '../images/image-one.jpg'
import image2 from '../images/image-two.jpg'
import image3 from '../images/image-three.jpg'
import image4 from '../images/image-four.jpg'
import image5 from '../images/image-five.jpg'
import pdfIcon from '../images/document-download.svg'
import trendingUp from '../images/trending-up.svg'
import trendingDown from '../images/trending-down.svg'
import bullChart from '../images/bull-run.svg'
import bearChart from '../images/bearish-run.svg'
import arrowDown from '../images/Arrow - Down 2.svg'
import { toggleDropdown } from './dropdown';
import { handleDropdownItemClick } from './dropdown';


import './Main.css'

const Main = ({ darkMode }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const updatedData = [5500, 20000, 3000, 25000, 15000, 45000, 15000, 25000, 35000, 4000, 30000, 22000];
    return (
        <div className={`main-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
           
           <Navbar />
            <div className='row'>
                <div className="card-chart grid-margin stretch-card">
                    <div className="card-c">
                        <div className="card-body">
                            <div className="header-container">
                                <div>
                                    <p className="card-title">Sales Trends</p>
                                </div>
                                <div className="sort-container">
                                    <p className='sort-text'>Sort by:</p>
                                    <div className="dropdown" id="myDropdown">
                                        <button className="dropbtn" onClick={toggleDropdown}>
                                            Weekly
                                            <img src={arrowDown} alt='' className="arrow-icon" />
                                        </button>
                                        <div className="dropdown-day" id="myDropdown">
                                            <div className="dropdown-content">
                                                <p className='day-text' onClick={() => handleDropdownItemClick('Weekly')}>Weekly</p>
                                                <p className='day-text' onClick={() => handleDropdownItemClick('Monthly')}>Monthly</p>
                                                <p className='day-text' onClick={() => handleDropdownItemClick('Yearly')}>Yearly</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sales-chart'>
                            <VictoryBarChart months={months} data={updatedData} />
                            </div>
                        </div>
                    </div>

                </div>


                <div className='card-group'>
                    <div className='top-card'>
                        <div className='card-a'>
                            <div class="card-body">
                                <div className='header-icons'>
                                    <img src={boxIcon} alt='Order Icon' className='circle-image' />
                                    <img src={bullChart} alt='' />
                                </div>
                                <p class="mb-4">Total Order</p>
                                <p class="fs-30 mb-2">350</p>
                                <div className='bottom-content'>
                                    <div className='ratings green-trend' >
                                        <img src={trendingUp} alt='' />
                                        <span className='rating-num-green'>23.5%</span>
                                    </div>
                                    <p className='text-month'>vs. previous month</p>
                                </div>

                            </div>
                        </div>
                        <div className='card-a'>
                            <div class="card-body">
                                <div className='header-icons'>
                                    <img src={cartIcon} alt='Shopping Icon' className='circle-image' />
                                    <img src={bearChart} alt='' />
                                </div>
                                <p class="mb-4">Average Sales</p>
                                <p class="fs-30 mb-2">1567</p>
                                <div className='bottom-content'>
                                    <div className='ratings red-trend'>
                                        <img src={trendingDown} alt='' />
                                        <span className='rating-num-red'>23.5%</span>
                                    </div>
                                    <p className="text-month">vs. previous month</p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='bottom-card'>
                        <div className='card-a'>
                            <div class="card-body">
                                <div className='header-icons'>
                                    <img src={rotateIcon} alt='Refund Icon' className='circle-image' />
                                    <img src={bearChart} alt='' />
                                </div>
                                <p class="mb-4">Total Refund</p>
                                <p class="fs-30 mb-2">270</p>
                                <div className='bottom-content'>
                                    <div className='ratings red-trend'>
                                        <img src={trendingDown} alt='' />
                                        <span className='rating-num-red'>23.5%</span>
                                    </div>
                                    <p className='text-month'>vs. previous month</p>
                                </div>

                            </div>
                        </div>
                        <div className='card-a'>
                            <div class="card-body">
                                <div className='header-icons'>
                                    <img src={coinIcon} alt='Coin Icon' className='circle-image' />
                                    <img src={bullChart} alt='' />
                                </div>
                                <p class="mb-4">Total Income</p>
                                <p class="fs-30 mb-2">$350,000</p>
                                <div className='bottom-content'>
                                    <div className='ratings green-trend'>
                                        <img src={trendingUp} alt='' />
                                        <span className='rating-num-green'>23.5%</span>
                                    </div>
                                    <p className='text-month'>vs. previous month</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row-two'>
                <div className='card-one'>
                    <div className='header'>
                        <span>Last Orders</span>
                        <a href="#" className='see-all-link'>See All</a>
                    </div>
                    <div className='content'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Invoice</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <img src={image1} alt='' className='user-image' />
                                            <span className='user-name'>Marcus Bergson</span>
                                        </td>
                                        <td className='tbl-text'>Nov 15, 2023</td>
                                        <td className='tbl-text'>$80,000</td>
                                        <td className='green-alert'>Paid</td>
                                        <td>
                                            <img src={pdfIcon} alt='Pdf File' className='pdf-file' />
                                            <span className='pdf-view'>View</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={image2} alt='' className='user-image' />
                                            <span className='user-name'>Jaydon Vaccaro</span>
                                        </td>
                                        <td className='tbl-text'>Nov 15, 2023</td>
                                        <td className='tbl-text'>$150,000</td>
                                        <td className='red-alert'>Refund</td>
                                        <td>
                                            <img src={pdfIcon} alt='Pdf File' className='pdf-file' />
                                            <span className='pdf-view'>View</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={image3} alt='' className='user-image' />
                                            <span className='user-name'>Corey Schleifer</span>
                                        </td>
                                        <td className='tbl-text'>Nov 14, 2023</td>
                                        <td className='tbl-text'>$87,000</td>
                                        <td className='green-alert'>Paid</td>
                                        <td>
                                            <img src={pdfIcon} alt='Pdf File' className='pdf-file' />
                                            <span className='pdf-view'>View</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={image4} alt='' className='user-image' />
                                            <span className='user-name'>Cooper Press</span>
                                        </td>
                                        <td className='tbl-text'>Nov 14, 2023</td>
                                        <td className='tbl-text'>$100,000</td>
                                        <td className='red-alert'>Refund</td>
                                        <td>
                                            <img src={pdfIcon} alt='Pdf File' className='pdf-file' />
                                            <span className='pdf-view'>View</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={image5} alt='' className='user-image' />
                                            <span className='user-name'>Phillip Lubin</span>
                                        </td>
                                        <td className='tbl-text'>Nov 13, 2023</td>
                                        <td className='tbl-text'>$78,000</td>
                                        <td className='green-alert'>Paid</td>
                                        <td>
                                            <img src={pdfIcon} alt='Pdf File' className='pdf-file' />
                                            <span className='pdf-view'>View</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='card-two'>
                    <div className='header'>
                        <span>Top Platform</span>
                        <a href="#" className='see-all-link'>See All</a>
                    </div>
                    <div className='content'>
                        <p className='platform-text'>Book Bazaar</p>
                        <div className='progress-bar'>
                            <div className='progress-filled-purple'></div>
                        </div>
                        <div className='details'>
                            <span className='num-text'>$2,500,000</span>
                            <span className='num-text'>+15%</span>
                        </div>
                    </div>
                    <div className='content'>
                        <p className='platform-text'>Artisan Aisle</p>
                        <div className='progress-bar'>
                            <div className='progress-filled-blue'></div>
                        </div>
                        <div className='details'>
                            <span className='num-text'>$1,800,000</span>
                            <span className='num-text'>+10%</span>
                        </div>
                    </div>
                    <div className='content'>
                        <p className='platform-text'>Toy Troop</p>
                        <div className='progress-bar'>
                            <div className='progress-filled-yellow'></div>
                        </div>
                        <div className='details'>
                            <span className='num-text'>$1,200,000</span>
                            <span className='num-text'>+8%</span>
                        </div>
                    </div>
                    <div className='content'>
                        <p className='platform-text'>XStore</p>
                        <div className='progress-bar'>
                            <div className='progress-filled-red'></div>
                        </div>
                        <div className='details'>
                            <span className='num-text'>$600,000</span>
                            <span className='num-text'>+5%</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Main



