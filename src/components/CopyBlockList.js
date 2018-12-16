import React from "react";
import CopyBlock from "./CopyBlock";

const CopyBlockList = props => (
  <div className="copy-block-list">
    {Object.keys(props.copyBlockMap).map(uuid => {
      return (
        <CopyBlock
          key={uuid}
          uuid={uuid}
          content={props.copyBlockMap[uuid]}
          deleteCopyBlock={props.deleteCopyBlock}
          shouldDeleteAfter={props.shouldDeleteAfter}
        />
      );
    })}
  </div>
);

export default CopyBlockList;
