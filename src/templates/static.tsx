/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Favicon from "../public/yext-favicon.ico";
import Checkbox from "../components/checkbox.tsx"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';





/**
 * Not required for static templates, but will contain the stream configuration for
 * entity-powered templates.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "static-example",
};

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. 
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<TemplateRenderProps> = async (
  data
) => {
  return data
};

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};


/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      }
    ],
  };
};


/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {

  // This is the site object from the Knowledge Graph. It contains all the data 
  // for the site entity, and can be accessed in any template, including static templates. 
  const { _site } = document;

  const options = ['Automotive', 'Education & Nonprofit', 'Financial Services', 'Food Services', 'Healthcare', 'Hospitality', 'Professional & Business Services', 'Public Sector', 'Real Estate', 'Recreation & Entertainment', 'Retail', 'Telecommunications'];

  const defaultOption = 'Choose your Industry';

  const manualActionsTable = {
    "Automotive":42.8,
    "Education & Nonprofit":16.4,
    "Financial Services":43.4,
    "Food Services":249.5,
    "Healthcare":106.2,
    "Hospitality":79.4,
    "Professional & Business Services":28.2,
    "Public Sector":28.2,
    "Real Estate":32.4,
    "Recreation & Entertainment":51.8,
    "Retail":93.2,
    "Telecommunications":72.7
  }

  const costPerClickTable = {
    "Automotive":2.46,
    "Education & Nonprofit":2.40,
    "Financial Services":3.44,
    "Food Services":1.84,
    "Healthcare":3.63,
    "Hospitality":3.37,
    "Professional & Business Services":6.40,
    "Public Sector":3.35,
    "Real Estate":3.03,
    "Recreation & Entertainment":1.43,
    "Retail":0.66,
    "Telecommunications":5.54
  }

  const listingsActionsTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const yextListingsImprovementTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const yextReviewsImprovementTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const pageViewsTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const yextPagesImprovementTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const listingsActionConversionRateTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const pageViewConversionRateTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

  const searchConversionRateTable = {
    "Automotive":1,
    "Education & Nonprofit":2,
    "Financial Services":3,
    "Food Services":4,
    "Healthcare":5,
    "Hospitality":6,
    "Professional & Business Services":7,
    "Public Sector":8,
    "Real Estate":9,
    "Recreation & Entertainment":10,
    "Retail":11,
    "Telecommunications":12
  }

/* Handling User Inputs */

  const [industrySelected, setIndustrySelected] = useState('');
  const industrySelectionHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustrySelected(e.value);
    totalManualActionsHandleChange(e.value);
    costPerClickHandleChange(e.value);
    totalClicksDrivenHandleChange(e.value);
  };

  const [numberOfLocations, setNumberOfLocations] = useState(0)
  const numberOfLocationsHandleChange = (e) => {
    setNumberOfLocations(Math.ceil((Number(e.target.value))));
    validateNumberOfLocations(Math.ceil((Number(e.target.value))));
    totalClicksDrivenHandleChange(Math.ceil((Number(e.target.value))));
  };

  const [averageTransactionalValue, setAverageTransactionalValue] = useState(0)
  const averageTransactionalValueHandleChange = (e) => {
    validateAverageTransactionalValue(Math.ceil((Number(e.target.value))));
  };

  const [yextCost, setYextCost] = useState(0)
  const yextCostHandleChange = (e) => {
    validateYextCost(Math.ceil((Number(e.target.value))));
  };

  const [totalPageViews, setTotalPageViews] = useState(0)
  const pageViewsHandleChange = (e) => {
    validateTotalPageViews(Math.ceil((Number(e.target.value))));
    totalConversionsDrivenHandleChange(Math.ceil((Number(e.target.value))))
  };

  const [listingsChecked, setListingsChecked] = useState(false);
  const listingsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListingsChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [reviewsChecked, setReviewsChecked] = useState(false);
  const reviewsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewsChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [pagesChecked, setPagesChecked] = useState(false);
  const pagesHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPagesChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [searchChecked, setSearchChecked] = useState(false);
  const searchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
  };

  const [supportSearchChecked, setSupportSearchChecked] = useState(false);
  const supportSearchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupportSearchChecked(e.target.checked);
  };

  const [numberOfLocationsIsValid, setNumberOfLocationsIsValid] = useState(true)
  const validateNumberOfLocations = (userInput) => {
    if (isNaN(userInput)) {
      setNumberOfLocationsIsValid(false)
    }
    else {
      setNumberOfLocationsIsValid(true)
    }
  }

  const [averageTransactionalValueIsValid, setAverageTransactionalValueIsValid] = useState(true)
  const validateAverageTransactionalValue = (userInput) => {
    if (isNaN(userInput)) {
      setAverageTransactionalValueIsValid(false)
    }
    else {
      setAverageTransactionalValueIsValid(true)
    }
  }

  const [yextCostIsValid, setYextCostIsValid] = useState(true)
  const validateYextCost = (userInput) => {
    if (isNaN(userInput)) {
      setYextCostIsValid(false)
    }
    else {
      setYextCostIsValid(true)
    }
  }

  const [totalPageViewsIsValid, setTotalPageViewsIsValid] = useState(true)
  const validateTotalPageViews = (userInput) => {
    if (isNaN(userInput)) {
      setTotalPageViewsIsValid(false)
    }
    else {
      setTotalPageViewsIsValid(true)
    }
  }


  /* Calculating Operational Value */

  const [multiplier, setMultiplier] = useState(0);
  const multiplierHandleChange = (update : string) => {

    var myNumber = multiplier

    var myUpdate = update.split(',')
    
    if (myUpdate[1] == 'true' && myUpdate[0] != 'Pages') {
      myNumber = myNumber + 3
    }

    if (myUpdate[1] == 'false' && myUpdate[0] != 'Pages') {
      myNumber = myNumber - 3
    }

    if (myUpdate[1] == 'true' && myUpdate[0] == 'Pages') {
      myNumber = myNumber + 1
    }

    if (myUpdate[1] == 'false' && myUpdate[0] == 'Pages') {
      myNumber = myNumber - 1
    }

    setMultiplier(myNumber)
    totalManualActionsHandleChange(myNumber)
  }

  const [totalManualActionsSaved, setTotalManualActionsSaved] = useState(0);
  const totalManualActionsHandleChange = (newData : any) => {
    if (typeof (newData) == 'number') {
      setTotalManualActionsSaved(Math.ceil(manualActionsTable[industrySelected] * newData * 100) / 100);
      setTotalOperationalValue(Math.ceil(manualActionsTable[industrySelected] * newData * 2.08 * 100) / 100)
    }
    if (typeof (newData) == 'string') {
      setTotalManualActionsSaved(Math.ceil(manualActionsTable[newData] * multiplier * 100) / 100);
      setTotalOperationalValue(Math.ceil(manualActionsTable[newData] * multiplier * 2.08 * 100) / 100)
    }
  };

  const [totalOperationalValue, setTotalOperationalValue] = useState(0);


  /* Calculating Marketing Value */

  const [totalClicksDriven, setTotalClicksDriven] = useState(0)
  const totalClicksDrivenHandleChange = (update : any) => {
    var listingsClicksDriven = 0
    var reviewsClicksDriven = 0
    var pagesClicksDriven = 0

    if (typeof(update) == 'number') { // i.e. the number of locations has been edited
      if(listingsChecked) {
        var listingsActions : number = listingsActionsTable[industrySelected]
        var yextListingsImprovement : number = yextListingsImprovementTable[industrySelected]
        listingsClicksDriven = listingsActions * yextListingsImprovement * update
      }
  
      if(reviewsChecked) {
        var listingsActions = listingsActionsTable[industrySelected]
        var yextReviewsImprovement = yextReviewsImprovementTable[industrySelected]
        reviewsClicksDriven = listingsActions * yextReviewsImprovement * update
      }
  
      if(pagesChecked) {
        var pageViews = pageViewsTable[industrySelected]
        var yextPagesImprovement = yextPagesImprovementTable[industrySelected]
        pagesClicksDriven = pageViews * yextPagesImprovement * update
      }
      totalConversionsDrivenHandleChange(listingsClicksDriven + "," + reviewsClicksDriven + "," + pagesClicksDriven)
    }

    if (typeof(update) == 'string' && !update.includes(',')) { // i.e. the industry has changed
      if(listingsChecked && update != 'Listings,false') {
        var listingsActions : number = listingsActionsTable[update]
        var yextListingsImprovement : number = yextListingsImprovementTable[update]
        listingsClicksDriven = listingsActions * yextListingsImprovement * numberOfLocations
      }
  
      if(reviewsChecked && update != 'Reviews,false') {
        var listingsActions = listingsActionsTable[update]
        var yextReviewsImprovement = yextReviewsImprovementTable[update]
        reviewsClicksDriven = listingsActions * yextReviewsImprovement * numberOfLocations
      }
  
      if(pagesChecked && update != 'Pages,false') {
        var pageViews = pageViewsTable[update]
        var yextPagesImprovement = yextPagesImprovementTable[update]
        pagesClicksDriven = pageViews * yextPagesImprovement * numberOfLocations
      }
      totalConversionsDrivenHandleChange(listingsClicksDriven + "," + reviewsClicksDriven + "," + pagesClicksDriven + "," + update) // we do this so that the next function knows the industry change
    }

    if (typeof(update) == 'string' && update.includes(',')) { // i.e. a product has been checked or unchecked
      if((listingsChecked && update != 'Listings,false') || update == 'Listings,true') {
        var listingsActions : number = listingsActionsTable[industrySelected]
        var yextListingsImprovement : number = yextListingsImprovementTable[industrySelected]
        listingsClicksDriven = listingsActions * yextListingsImprovement * numberOfLocations
      }
  
      if((reviewsChecked && update != 'Reviews,false') || update == 'Reviews,true') {
        var listingsActions = listingsActionsTable[industrySelected]
        var yextReviewsImprovement = yextReviewsImprovementTable[industrySelected]
        reviewsClicksDriven = listingsActions * yextReviewsImprovement * numberOfLocations
      }
  
      if((pagesChecked && update != 'Pages,false') || update == 'Pages,true') {
        var pageViews = pageViewsTable[industrySelected]
        var yextPagesImprovement = yextPagesImprovementTable[industrySelected]
        pagesClicksDriven = pageViews * yextPagesImprovement * numberOfLocations
      }
      totalConversionsDrivenHandleChange(listingsClicksDriven + "," + reviewsClicksDriven + "," + pagesClicksDriven)
    }
    setTotalClicksDriven(listingsClicksDriven + reviewsClicksDriven + pagesClicksDriven);
    totalMarketingValueHandleChange((listingsClicksDriven + reviewsClicksDriven + pagesClicksDriven).toString());
  }


  const [costPerClick, setCostPerClick] = useState(0)
  const costPerClickHandleChange = (industry) => {
    setCostPerClick(costPerClickTable[industry])
  }


  const [totalMarketingValue, setTotalMarketingValue] = useState(0)
  const totalMarketingValueHandleChange = (update) => {
    if(typeof(update) == 'number') { // CPC updated
      setTotalMarketingValue(totalClicksDriven * update)
    }

    if(typeof(update) == 'string') { // total clicks driven updated
      setTotalMarketingValue(update * costPerClick)
    }
  }


  /* Calculating Conversion Value */


  // here is where we are currently
  // i think we have to update what this below function receives from total clicks driven so that we know if there's an industry change
  // we also have to add search into it

  const [totalConversionsDrivenWithoutSearch, setTotalConversionsDrivenWithoutSearch] = useState(0)
  const [totalConversionsDrivenWithSearch, setTotalConversionsDrivenWithSearch] = useState(0)
  const [totalConversionsDriven, setTotalConversionsDriven] = useState(0)
  const totalConversionsDrivenHandleChange = (update : any) => { 
    //var totalConversionsWithoutSearch = 0
    //var totalConversionsWithSearch = 0
    console.log(update)
    if (update.indexOf(',') > -1) { // something other than total page views has been edited
      var subUpdates = update.split(',')
      if (subUpdates.length == 4) { // i.e. there has been an industry update and the industry = subUpdates[3]
        var totalConversionsWithoutSearch = subUpdates[0]*listingsActionConversionRateTable[subUpdates[3]] + subUpdates[1]*listingsActionConversionRateTable[subUpdates[3]] + subUpdates[2]*pageViewConversionRateTable[subUpdates[3]]
        setTotalConversionsDrivenWithoutSearch(totalConversionsWithoutSearch)
        setTotalConversionsDriven(totalConversionsWithoutSearch + totalConversionsDrivenWithSearch)
      }
      if (subUpdates.legnth == 3) { // no industry update
        var totalConversionsWithoutSearch = subUpdates[0]*listingsActionConversionRateTable[industrySelected] + subUpdates[1]*listingsActionConversionRateTable[industrySelected] + subUpdates[2]*pageViewConversionRateTable[industrySelected]
        setTotalConversionsDrivenWithoutSearch(totalConversionsWithoutSearch)
        setTotalConversionsDriven(totalConversionsWithoutSearch + totalConversionsDrivenWithSearch)
      }
    }
    // if (!(update.includes(','))) { // total page views has changed
    //   var totalConversionsWithSearch = update * .1 * searchConversionRateTable[industrySelected] * .15
    //   setTotalConversionsDrivenWithSearch(totalConversionsWithSearch)
    //   setTotalConversionsDriven(totalConversionsDrivenWithoutSearch + totalConversionsWithSearch)
    // }

  }


  return (
    <>
    <div className="p-3" >
    <h2>Proposal Factory</h2>
    <br></br>
      Industry
      <Dropdown className="max-w-sm" onChange={industrySelectionHandleChange} options={options} value={defaultOption} placeholder="Select an option" />
      <br></br>
      Number of Locations
      <br></br>
      <input className="border-2 border-black-300" type="text" onChange={numberOfLocationsHandleChange} />
      {!numberOfLocationsIsValid && (
        <p className="text-red-500"> Must be a valid number </p>
      )}
      <br></br>
      Average Transactional Value
      <br></br>
      $<input className="border-2 border-black-300" type="text" onChange={averageTransactionalValueHandleChange} />
      {!averageTransactionalValueIsValid && (
        <p className="text-red-500"> Average Transactional Value be a valid number, without currency sign </p>
      )}
      <br></br>
      Yext Cost
      <br></br>
      $<input className="border-2 border-black-300" type="text" onChange={yextCostHandleChange} />
      {!yextCostIsValid && (
        <p className="text-red-500"> Yext Cost be a valid number, without currency sign </p>
      )}
      <br></br>
      Yext Products
      <Checkbox
          handleChange={listingsHandleChange}
          isChecked={listingsChecked}
          label="Listings"
        />
      <Checkbox
          handleChange={reviewsHandleChange}
          isChecked={reviewsChecked}
          label="Reviews"
        />
      <Checkbox
          handleChange={pagesHandleChange}
          isChecked={pagesChecked}
          label="Pages"
        />
      <Checkbox
          handleChange={searchHandleChange}
          isChecked={searchChecked}
          label="Search"
        />
      {searchChecked && (
        <div>
        <p> Total Page Views </p>
        <input className="border-2 border-black-300" type="text" onChange={pageViewsHandleChange} />
          {!totalPageViewsIsValid && (
          <p className="text-red-500"> Must be a valid number </p>
        )}
        </div>
      )}
      
      <Checkbox
          handleChange={supportSearchHandleChange}
          isChecked={supportSearchChecked}
          label="Support Search"
        />
      <br></br>
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      <br></br>
      <br></br>
      <p className="underline" > Operational Value</p>
      Total Manual Actions Saved: {totalManualActionsSaved}
      <br></br>
      Cost Saved Per Action: $2.08 (fixed)
      <br></br>
      Total Operational Value: ${totalOperationalValue}
      <br></br>
      <br></br>
      <p className="underline" > Marketing Value</p>
      Total Clicks Driven: {totalClicksDriven}
      <br></br>
      Cost Per Click: ${costPerClick}
      <br></br>
      Total Marketing Value: ${totalMarketingValue}
      <br></br>
      <br></br>
      <p className="underline" > Conversion Value</p>
      Total Conversions Driven: ${totalConversionsDriven}
      <br></br>
      Average Transaction Value: 
      <br></br>
      Total Conversion Value:
    </div>

    </>
  );
};

export default Static;
