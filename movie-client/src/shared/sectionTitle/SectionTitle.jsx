

import PropTypes from 'prop-types'

const SectionTitle = ({heading}) => {

    return (
        <div className="">
                 <div  className="border-l-4 border-primary p-1  font-bold">
                    {heading}
                 </div>
        </div>
    );
};




SectionTitle.propTypes = {

    heading:PropTypes.string,

}

export default SectionTitle






