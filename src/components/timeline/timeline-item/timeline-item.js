import React from 'react';
import './timeline-item.scss';

class TimeLineItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showingMore: false
        }

    }

    showMoreFn = () => {
        this.setState({showingMore: !this.state.showingMore})
    }
    
    render() {
        const {description, project, place, url} = this.props.project || {};
        const {showingMore} = this.state; 
        return(
            <div className='timeline-item'>
                <div className='timeline-item-content'>
                    <div>
                        <p id='project'>{project}</p>
                        <p id='place'>{place}</p>
                        <p id='description' className={`${showingMore ? 'max-height-300px': ''}`} >{description}</p>
                        <p onClick={this.showMoreFn} id='show-more'>
                            {showingMore ? 'SHOW LESS' : 'SHOW MORE'}
                        </p>
                        {
                            url ? <a href={url}>More info about this project</a> : ''
                        }
                    </div>
                    <span className="circle" />
                </div>
    
            </div>
        )

    }

}

export default TimeLineItem;