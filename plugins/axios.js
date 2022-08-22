export default function ({ $axios, store, redirect, $bvToast }) {
  console.log("axios");
  $axios.onError((error) => {
    if (error.response && error.response.status === 500) {
      $bvToast.toast("Sorry an error occured, check your internet", {
        varient: "danger",
        solid: true,
        noCloseButton: true,
      });
    }
  });
}
