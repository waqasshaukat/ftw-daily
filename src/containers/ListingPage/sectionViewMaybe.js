import React from 'react'
import { FormattedMessage } from '../../util/reactIntl'
import css from './ListingPage.css'

//create new react component
const SectionViewMaybe = props => {
    // Component's props should include all the possibe options (from config)
    // and listing's public Data
    const { options, publicData } = props;
    const selectedOption = publicData && publicData.view ? publicData.view : null; 
    //Don't return anything if public data doesn't contain view field
    //That's why we named this component as SectionViewMaybe
    if(!publicData || !selectedOption){
        return null;
    }
    //Find selected options label
    const optionConfig = options.find(o => o.key === selectedOption);
    const optionLabel = optionConfig ? optionConfig.label : null; 
    return(
        <div className={css.sectionFeatures}>
            <h2>
                <FormattedMessage 
                    id = "ListingPage.viewType"
                    values = {{view: optionLabel.toLowerCase() }}
                />
            </h2>
        </div>
    );
};
export default SectionViewMaybe;
