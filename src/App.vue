<template>
  <div class="Image">
    <Categories
      v-for="i in Categories"
      :bg="rgba(242, 252, 228, 1)"
      :ItemName="text"
      :Img="Categories.Img"
    ></Categories>
    
    
  </div>
  <h2>Hello</h2>
</template>
<script>
import Button from "./components/Button.vue";
import Categories from "./components/Categories.vue";
export default {
  name: "App",
  components: {
    Button,
    Categories,
  },
  data() {
    return {
      Categories: [
        {
          Img:"https://s3-alpha-sig.figma.com/img/8370/e915/8a586f746c0b10b70cd405c8aa1f2038?Expires=1699228800&Signature=L-reokY4cdElwI8HHeS9iKW58ip98C93-H~HpTII~Px9MXnLDATcnx-ZaQv5AXB6weQwhTXCekkyWSSLxJGsBqOLWxlzhDKADaXO-4HoKz6q-crjH6nX6-XIW0HQzfmxFRIGb9NP6sxwik7gx5fDpOzQLeVu5U~Js6kcysvwNVBRf9g90BJBjOWxV6UyIVchOYCaRFZgvZv-pCGevQhQ0RzENRzyWu15Ps~xweWRVAFAqYQwSO~hQbFULB~4ohbZ9Zxu3sxuXEyWg8Tg8P3KWIzvM2J190-H2Gazbsy-scpr4-rsf9PXWPMCD~i62IEhAAo8xjJwj5yyDR-a-VY8LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          bg:"rgba(242, 252, 228, 1)",
          ItemName:"Burger"
        },
             
      ],
    };
  },
};
</script>

<style></style>
