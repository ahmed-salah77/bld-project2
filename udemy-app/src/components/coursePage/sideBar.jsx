import React from 'react';
import '../../css/sideBar.css'
const SideBar = (props) => {
    const course = props.course;
    return (
        <div className='side-bar-container'>
            <div className='preview-course'>
                <img className = 'preview-img' src={course.image_304x171} alt=''/>
                <i className="preview-icon fa-solid fa-circle-play"></i>
                <div className='preview-text'>Preview this course</div>
            </div>
            <div className='course-price-and-info'>
               {course.discount ?
               <>
                <div className='d-flex flex-wrap'>
                    <div className='discount-price'>{course.discount.price.price_string}</div>
                    <div className='original-price'>{course.price}</div>
                    <div className='discount-percent'>{course.discount.discount_percent}% off</div>
                </div>
                <div className='time-left'>
                <i className="fa-regular fa-clock"></i><strong> 1 day</strong> left at this price!
                </div></>:
                <div><div className='discount-price'>{course.price}</div></div>
                }
                
                <div className='add-to-cart-and-buy-container'>
                    <div className='add-to-cart-container'>
                        <button className='add-to-cart-btn'>Add to cart</button>
                        <button className='add-to-wish-list-btn'><i className="fa-regular fa-heart"></i></button>
                    </div>
                    <div className='buy-now-container'>
                        <button className='buy-now-btn'>Buy now</button>
                    </div>
                </div>
                <div className='day-money-back'>30-Day Money-Back Guarantee</div>
                <div className='course-includes'>
                    <div className='fw-bold'>This course includes:</div>
                    <div className='include-item'><div className='include-icon'><i className="fa-solid fa-tv"></i></div> {course.content_info_short} on-demand video</div>
                    {course.num_article_assets ? <div className='include-item'><div className='include-icon'><i className="fa-regular fa-file"></i></div> {course.num_article_assets} articles</div>:''}
                    {course.num_additional_assets ? <div className='include-item'><div className='include-icon'><i className="fa-regular fa-circle-down"></i></div> {course.num_additional_assets} downloadable resources</div>:''}
                    {course.num_coding_exercises ? <div className='include-item'><div className='include-icon'><i className="fa-solid fa-code"></i></div> {course.num_coding_exercises} coding exercises</div>:''}
                    <div className='include-item'><div className='include-icon'><i className="fa-solid fa-infinity"></i></div> Full lifetime access</div>
                    <div className='include-item'><div className='include-icon'><i className="fa-solid fa-mobile-screen-button"></i></div> Access on mobile and TV</div>
                    {course.num_assignments ? <div  className='include-item'><div className='include-icon'><i className="fa-solid fa-clipboard-list"></i></div> {course.num_assignments}</div>:''}
                    {course.has_certificate ? <div className='include-item'><div className='include-icon'><i className="fa-solid fa-trophy"></i></div> Certificate of completion</div>:''}
                </div>
                <div className='options-section'>
                    <div className='option-text'>Share</div>
                    <div className='option-text'>Gift this course</div>
                    <div className='option-text'>Apply Coupon</div>
                </div>
            </div>
            <div className='udemy-business-container'>
                    <h5 className='fw-bold'>Training 5 or more people?</h5>
                    <p style={{fontSize:14}}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                    <button className='try-btn'>Try Udemy Business</button>
                </div>
        </div>
    );
}

export default SideBar;
