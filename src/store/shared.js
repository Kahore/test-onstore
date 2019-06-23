import axios from 'axios';

export function doAjax( url ) {
  axios.get( url ).then( response => {
    return response;
  } );
  // .catch( error => {
  //   console.log( error );
  //   this.errored = true;
  // } )
  // .finally( () => ( this.loading = false ) );
}
export default {
  doAjax,
};
