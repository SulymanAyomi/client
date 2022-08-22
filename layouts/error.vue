<template>
  <div>
    <div id="page-content">
      <!-- Lookbook Start -->
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="empty-page-content text-center">
              <div v-if="error.statusCode === 404">
                <h1>404 Page Not Found</h1>
                <p>The page you requested does not exist.</p>
              </div>
              <div class="mb-3" v-else>
                <h2>Sorry an error occured check your internet</h2>
              </div>
              <p>
                <NuxtLink to="/" class="btn btn--has-icon-after"
                  >Continue shopping
                  <i class="fa fa-caret-right" aria-hidden="true"></i
                ></NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Lookbook Start -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["error"],
};
</script>