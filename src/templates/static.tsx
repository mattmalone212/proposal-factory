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
    "Automotive":21.4,
    "Education & Nonprofit":8.2,
    "Financial Services":21.7,
    "Food Services":124.75,
    "Healthcare":53.1,
    "Hospitality":39.7,
    "Professional & Business Services":14.1,
    "Public Sector":14.1,
    "Real Estate":16.2,
    "Recreation & Entertainment":25.9,
    "Retail":46.6,
    "Telecommunications":36.35
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
    "Automotive":2200,
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
    "Automotive":.16,
    "Education & Nonprofit":.16,
    "Financial Services":.16,
    "Food Services":.16,
    "Healthcare":.16,
    "Hospitality":.16,
    "Professional & Business Services":.16,
    "Public Sector":.16,
    "Real Estate":.16,
    "Recreation & Entertainment":.16,
    "Retail":.16,
    "Telecommunications":.16
  }

  const yextReviewsImprovementTable = {
    "Automotive":.015,
    "Education & Nonprofit":.015,
    "Financial Services":.015,
    "Food Services":.015,
    "Healthcare":.015,
    "Hospitality":.015,
    "Professional & Business Services":.015,
    "Public Sector":.015,
    "Real Estate":.015,
    "Recreation & Entertainment":.015,
    "Retail":.015,
    "Telecommunications":.015
  }

  const pageViewsTable = {
    "Automotive":1261,
    "Education & Nonprofit":.18,
    "Financial Services":.18,
    "Food Services":.18,
    "Healthcare":.18,
    "Hospitality":.18,
    "Professional & Business Services":.18,
    "Public Sector":.18,
    "Real Estate":.18,
    "Recreation & Entertainment":.18,
    "Retail":.18,
    "Telecommunications":.18
  }

  const yextPagesImprovementTable = {
    "Automotive":.18,
    "Education & Nonprofit":.18,
    "Financial Services":.18,
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
    totalConversionsDrivenHandleChange(e.value);
  }

  const [numberOfLocations, setNumberOfLocations] = useState(0)
  const numberOfLocationsHandleChange = (e) => {
    setNumberOfLocations(Math.ceil((Number(e.target.value))));
    validateNumberOfLocations(Math.ceil((Number(e.target.value))));
    totalClicksDrivenHandleChange(Math.ceil((Number(e.target.value))));
    totalConversionsDrivenHandleChange(Math.ceil((Number(e.target.value))));
  };

  const [averageTransactionalValue, setAverageTransactionalValue] = useState(0)
  const averageTransactionalValueHandleChange = (e) => {
    setAverageTransactionalValue(Math.ceil((Number(e.target.value))));
    totalConversionValueHandleChange('ATV='+e.target.value);
    validateAverageTransactionalValue(Math.ceil((Number(e.target.value))));
  };

  const [yextCost, setYextCost] = useState(0)
  const yextCostHandleChange = (e) => {
    setYextCost(Number(e.target.value))
    validateYextCost(Math.ceil((Number(e.target.value))));
    ROIHandleChange('cost:'+e.target.value)
  };

  const [totalPageViews, setTotalPageViews] = useState(0)
  const pageViewsHandleChange = (e) => {
    validateTotalPageViews(Math.ceil((Number(e.target.value))));
    totalConversionsDrivenHandleChange('pageViews='+e.target.value)
  };

  const [listingsChecked, setListingsChecked] = useState(false);
  const listingsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListingsChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
    totalConversionsDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [reviewsChecked, setReviewsChecked] = useState(false);
  const reviewsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewsChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
    totalConversionsDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [pagesChecked, setPagesChecked] = useState(false);
  const pagesHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPagesChecked(e.target.checked);
    multiplierHandleChange(e.target.id + "," + e.target.checked)
    totalClicksDrivenHandleChange(e.target.id + "," + e.target.checked);
    totalConversionsDrivenHandleChange(e.target.id + "," + e.target.checked);
  };

  const [searchChecked, setSearchChecked] = useState(false);
  const searchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked == false) {
      setTotalPageViews(0)
    }
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
    console.log(myUpdate)
    
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
    totalManualActionsHandleChange("multiplier=" + myNumber)
  }

  const [totalManualActionsSaved, setTotalManualActionsSaved] = useState(0);
  const totalManualActionsHandleChange = (newData : any) => {
    if (typeof (newData) == 'number') { // update is the number of locations
      setTotalManualActionsSaved(Math.ceil(manualActionsTable[industrySelected] * multiplier * newData * 100) / 100);
      setTotalOperationalValue(Math.ceil(manualActionsTable[industrySelected] * multiplier * newData * 2.08 * 100) / 100)
      totalValueOFSolutionsHandleChange('operational:'+Math.ceil(manualActionsTable[industrySelected] * multiplier * newData * 2.08 * 100) / 100)
    }
    if (newData.includes('multiplier')) { // update is the multiplier
      console.log(newData)
      var currentMultiplier = Number(newData.split('=')[1])
      console.log(currentMultiplier)
      console.log(typeof(manualActionsTable[industrySelected]) + typeof (currentMultiplier) + typeof (numberOfLocations))
      setTotalManualActionsSaved(Math.ceil(manualActionsTable[industrySelected] * currentMultiplier * numberOfLocations * 100) / 100);
      setTotalOperationalValue(Math.ceil(manualActionsTable[industrySelected] * currentMultiplier * numberOfLocations * 2.08 * 100) / 100)
      totalValueOFSolutionsHandleChange('operational:'+ Math.ceil(manualActionsTable[industrySelected] * currentMultiplier * numberOfLocations * 2.08 * 100) / 100)
    }
    else  { // industry Change
      setTotalManualActionsSaved(Math.ceil(manualActionsTable[newData] * multiplier * numberOfLocations *  100) / 100);
      setTotalOperationalValue(Math.ceil(manualActionsTable[newData] * multiplier * numberOfLocations * 2.08 * 100) / 100)
      totalValueOFSolutionsHandleChange('operational:'+(Math.ceil(manualActionsTable[newData] * multiplier * numberOfLocations * 2.08 * 100) / 100))
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
    totalValueOFSolutionsHandleChange('marketing:'+totalMarketingValue)
  }


  /* Calculating Conversion Value */

  const [totalConversionsDriven, setTotalConversionsDriven] = useState(0)
  const totalConversionsDrivenHandleChange = (update : any) => {

    var listingsConversionsDriven = 0
    var reviewsConversionsDriven = 0
    var pagesConversionsDriven = 0
    var searchConvserionsDriven = 0

    if (typeof (update) == 'number') { // i.e. the number of locations has changed
      if(listingsChecked) {
        listingsConversionsDriven = update * listingsActionConversionRateTable[industrySelected] * yextListingsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(reviewsChecked) {
        reviewsConversionsDriven =  update * listingsActionConversionRateTable[industrySelected] * yextReviewsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(pagesChecked) {
        pagesConversionsDriven = update * pageViewsTable[industrySelected] * yextPagesImprovementTable[industrySelected] * pageViewConversionRateTable[industrySelected]
      }
      if(searchChecked) {
        searchConvserionsDriven = totalPageViews * .1 * searchConversionRateTable[industrySelected] * .15 // .1 is the search rate (fixed) and .15 is the yext improvement for search (fixed)
      }
    }
    else if (typeof(update) == 'string' && !update.includes(',') && !update.includes('=')) { // i.e. the industry has changed
      if(listingsChecked) {
        listingsConversionsDriven = numberOfLocations * listingsActionConversionRateTable[update] * yextListingsImprovementTable[update] * listingsActionsTable[update]
      }
      if(reviewsChecked) {
        reviewsConversionsDriven =  numberOfLocations * listingsActionConversionRateTable[update] * yextReviewsImprovementTable[update] * listingsActionsTable[update]
      }
      if(pagesChecked) {
        pagesConversionsDriven = numberOfLocations * pageViewsTable[update] * yextPagesImprovementTable[update] * pageViewConversionRateTable[update]
      }
      if(searchChecked) {
        searchConvserionsDriven = totalPageViews * .1 * searchConversionRateTable[update] * .15 // .1 is the search rate (fixed) and .15 is the yext improvement for search (fixed)
      }
    }
    else if (typeof(update) == 'string' && update.includes(',')) { // i.e. a product has been checked or unchecked
      if(listingsChecked && update != 'Listings,false' || update == 'Listings,true') {
        listingsConversionsDriven = numberOfLocations * listingsActionConversionRateTable[industrySelected] * yextListingsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(reviewsChecked && update != 'Reviews,false' || update == 'Reviews,true') {
        reviewsConversionsDriven =  numberOfLocations * listingsActionConversionRateTable[industrySelected] * yextReviewsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(pagesChecked && update != 'Pages,false' || update == 'Pages,true') {
        pagesConversionsDriven = numberOfLocations * pageViewsTable[industrySelected] * yextPagesImprovementTable[industrySelected] * pageViewConversionRateTable[industrySelected]
      }
      if(searchChecked && update != 'Search,false' || update == 'Search,true') {
        searchConvserionsDriven = totalPageViews * .1 * searchConversionRateTable[industrySelected] * .15 // .1 is the search rate (fixed) and .15 is the yext improvement for search (fixed)
      }
    }
    else { // i.e. page views has changed and we know that search is clicked
      var pageViews = Number(update.split('=')[1])
      console.log(pageViews)

      if(listingsChecked) {
        listingsConversionsDriven = numberOfLocations * listingsActionConversionRateTable[industrySelected] * yextListingsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(reviewsChecked) {
        reviewsConversionsDriven =  numberOfLocations * listingsActionConversionRateTable[industrySelected] * yextReviewsImprovementTable[industrySelected] * listingsActionsTable[industrySelected]
      }
      if(pagesChecked) {
        pagesConversionsDriven = numberOfLocations * pageViewsTable[industrySelected] * yextPagesImprovementTable[industrySelected] * pageViewConversionRateTable[industrySelected]
      }
      if(searchChecked) {
        searchConvserionsDriven = pageViews * .1 * searchConversionRateTable[industrySelected] * .15 // .1 is the search rate (fixed) and .15 is the yext improvement for search (fixed)
      }
    } 

    setTotalConversionsDriven(listingsConversionsDriven + reviewsConversionsDriven + pagesConversionsDriven + searchConvserionsDriven)
    totalConversionValueHandleChange(listingsConversionsDriven + reviewsConversionsDriven + pagesConversionsDriven + searchConvserionsDriven)
    }

    const [totalConversionValue, setTotalConversionValue] = useState(0)
    const totalConversionValueHandleChange = (update : any) => {
      if (typeof (update) == 'number') {
        setTotalConversionValue(update*averageTransactionalValue)
      }
      if (typeof (update) == 'string') {
        var atv = Number(update.split('=')[1])
        setTotalConversionValue(totalConversionsDriven*atv)
      }
      totalValueOFSolutionsHandleChange('conversion:'+totalConversionValue)
    }


  /* Calculating Total Value */

    const [totalValueOfSolutions, setTotalValueOfSolutions] = useState(0)
    const totalValueOFSolutionsHandleChange = (update) => {
      if (update.includes('operational')) {
        var operationalTotal = Number(update.split(':')[1])
        setTotalValueOfSolutions(operationalTotal + totalMarketingValue + totalConversionValue)
        ROIHandleChange(operationalTotal + totalMarketingValue + totalConversionValue)
      }
      if (update.includes('marketing')) {
        var marketingTotal = Number(update.split(':')[1])
        setTotalValueOfSolutions(totalOperationalValue + marketingTotal + totalConversionValue)
        ROIHandleChange(totalOperationalValue + marketingTotal + totalConversionValue)
      }
      if (update.includes('conversion')) {
        var conversionTotal = Number(update.split(':')[1])
        setTotalValueOfSolutions(totalOperationalValue + totalMarketingValue + conversionTotal)
        ROIHandleChange(totalOperationalValue + totalMarketingValue + conversionTotal)
      }
    }

    const [ROI, setROI] = useState(0)
    const ROIHandleChange = (update) => {
      if (typeof(update) == 'string') {
        var currentCost = Number(update.split(',')[1])
        if (isNaN((Math.round((totalValueOfSolutions - currentCost)/currentCost)))) {
          setROI(0)
        }
        else {
          setROI(Math.round((totalValueOfSolutions - currentCost)/currentCost))
        }
      }
      else {
        if(isNaN(Math.round((update - yextCost)/yextCost))) {
          setROI(0)
        }
        else {
          setROI(Math.round((update - yextCost)/yextCost))
        }

      }
    }

  return (
    <>
    <div className="p-3" >
    <h2>Proposal Factory</h2>
    <br></br>
      Industry
      <Dropdown className="max-w-sm" onChange={industrySelectionHandleChange} options={options} value={defaultOption} placeholder="Select an option" />
      <br></br>
      Number of Entities
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
      Average Transaction Value: ${averageTransactionalValue}
      <br></br>
      Total Conversion Value: ${totalConversionValue}
      <br></br>
      <br></br>
      <p className="underline" > Total Value</p>
      Total Value of Solutions: ${totalValueOfSolutions}
      <br></br>
      Return on Investment: {ROI}x
    </div>

    </>
  );
};

export default Static;
