import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { LuSearch } from 'react-icons/lu';

function SearchBanner() {

  const [ isSearch, isSetSearch ] = useState("");


  const handleOnChange = (e) => {
    isSetSearch(e.target.value);
    console.log(isSearch);
    console.log(e.target.value);
  }

  return (
    <div>
      {
      <div css={s.searchBanner}>
        <input type="text" onChange={handleOnChange} />
        <LuSearch/>
      </div>
      }
    </div>
  )
}

export default SearchBanner;