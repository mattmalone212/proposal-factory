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
import Input from "../components/Input.tsx"
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

  const industryLookupTable = {
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

  const [listingsChecked, setListingsChecked] = useState(false);
  const listingsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListingsChecked(e.target.checked);
    multiplierHandleChange();
  };

  const [reviewsChecked, setReviewsChecked] = useState(false);
  const reviewsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewsChecked(e.target.checked);
  };

  const [pagesChecked, setPagesChecked] = useState(false);
  const pagesHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPagesChecked(e.target.checked);
    multiplierHandleChange();
  };

  const [searchChecked, setSearchChecked] = useState(false);
  const searchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchChecked(e.target.checked);
    multiplierHandleChange()
  };

  const [supportSearchChecked, setSupportSearchChecked] = useState(false);
  const supportSearchHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSupportSearchChecked(e.target.checked);
  };


  const [multiplier, setMultiplier] = useState(0);
  const multiplierHandleChange = () => {

    var myNumber = 0

    if (listingsChecked) {
      myNumber = myNumber + 3
    }
  
    if (pagesChecked) {
      myNumber = myNumber + 1
    }
  
    if (searchChecked) {
      myNumber = myNumber + 3
    }

    setMultiplier(myNumber)

    console.log(multiplier)

    totalManualActionsHandleChange()
  }

  const [industrySelected, setIndustrySelected] = useState('');
  const industrySelectionHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndustrySelected(e.value);
    totalManualActionsHandleChange();
  };

  const [totalManualActionsSaved, setTotalManualActionsSaved] = useState(0);
  const totalManualActionsHandleChange = () => {
    console.log('hi')
    setTotalManualActionsSaved(industryLookupTable[industrySelected] * multiplier);
  };

  // const [industrySelection, setIndustrySelection] = useState('');
  // const industrySelectionHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIndustrySelection(e.value);
  // };

  // const [totalManualActionsSaved, setTotalManualActionsSaved] = useState(0);
  // const totalManualActionsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTotalManualActionsSaved(industryLookupTable[e.value]*myNumber);
  // };

  // const [totalManualActions, setTotalManualActions] = useState(0);

  // const [totalManualActionsSaved, setTotalManualActionsSaved] = useState(0);



  // function handleDropdownChange(event) {
  //   setIndustrySelection(event.value)
  //   setTotalManualActionsSaved(industryLookupTable[industrySelection]*myNumber)
  // }

  return (
    <>
    <div className="p-3" >
    <h2>Proposal Factory</h2>
    <br></br>
      Industry
      <Dropdown className="max-w-sm" onChange={industrySelectionHandleChange} options={options} value={defaultOption} placeholder="Select an option" />
      <br></br>
      Num Locations
      <Input />
      <br></br>
      Avg Transactional Value
      <Input />
      <br></br>
      Yext cost
      <Input />
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
      <Checkbox
          handleChange={supportSearchHandleChange}
          isChecked={supportSearchChecked}
          label="Support Search"
        />
      <br></br>
      Total Manual Actions Saved: {totalManualActionsSaved}
    </div>

    </>
  );
};

export default Static;
