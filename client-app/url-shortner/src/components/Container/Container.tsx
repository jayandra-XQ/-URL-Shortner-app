import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constant';
import DataTable from '../DataTable/DataTable';



const Container: React.FunctionComponent = () => {
  const [data,setData] = React.useState<UrlData[]>([])
  const [reload, setReload] = React.useState<boolean>(false)

  const updateReloadState = ():void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is: " , response)
    setData(response.data);
    setReload(false);
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload])
  return(
    <>
      <FormContainer updateReloadState={updateReloadState}/>
      <DataTable updateReloadState={updateReloadState} data={data}/>
    </>
  ) ;
};

export default Container;
