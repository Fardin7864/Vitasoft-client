import CommonCompo from '@/common/common/Common';
import React from 'react';

const page = async ({params}) => {

  return (
    <div>
      <CommonCompo params={params}/>
    </div>
  );
};

export default page;