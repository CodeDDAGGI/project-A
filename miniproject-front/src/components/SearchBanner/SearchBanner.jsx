import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SearchBanner({setSearch}) {

  const [ isSearch, isSetSearch ] = useState("");
  const [ isOpen , setOpen ] = useState(false);

  const handleOnChange = (e) => {
    isSetSearch(e.target.value);
    console.log(isSearch);
    console.log(e.target.value);
  }

  return (
    // setSearch ? 
    <>
      {
      <div css={s.searchBanner}>
        <input type="text" onChange={handleOnChange} />
      </div>
      }
    </>
  );
}

export default SearchBanner;