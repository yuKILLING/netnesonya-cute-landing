<template>
  <div>
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-item-header">・faq</div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
            <div class="flex flex-col gap-2">
              <span class="question">how to make an order? </span>
              <span class="text-[#857377]"
                >orders are available only during an active raffle sale.
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <span class="question">what's a raffle sale? </span>
              <span class="text-[#857377]"
                >it's a time-limited event which you can enter by filling a form
                for a chance to purchase the keycap. raffles are announced on my
                <a
                  href="https://www.instagram.com/wwsou/"
                  class="text-[#D79FAE]"
                  target="_blank"
                  >instagram</a
                >
                page, including the start and the end time. in case you've won,
                i will contact you for the checkout process and the following
                steps.
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <span class="question">do you ship internationally? </span>
              <span class="text-[#857377]"
                >yes, i ship worldwide with very few exceptions. contact me on
                <a
                  href="https://www.instagram.com/wwsou/"
                  class="text-[#D79FAE]"
                  target="_blank"
                  >instagram</a
                >
                for more information.
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <span class="question"
                >do you ever re-make the same designs later on?
              </span>
              <span class="text-[#857377]"
                >no. i want them to be unique. so that every raffle sale winner
                never has any regrets in the future!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-item-header">・more</div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
            <div class="flex gap-2">
              <a
                href="https://www.youtube.com/watch?v=rVJLkhUyR6k"
                target="_blank"
                class="underline hover:text-[#857377] transition"
                >osu skin</a
              >
              <span>.</span>
            </div>
            <span>contact email: wwsou.me@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", () => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );

      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
});
</script>

<style scoped>
.accordion {
  width: 54%;
  max-width: 1000px;
  margin: 2rem auto;
}
.accordion-item {
  background-color: #fff;
  margin: 1rem 0;
  font-size: 24px;
  border-radius: 0.5rem;
  /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25); */
  @apply border-b-2 border-[#D79FAE] border-opacity-25;
}
.accordion-item-header {
  padding: 0.5rem 3rem 0.5rem 1rem;
  color: #d79fae;
  min-height: 3.5rem;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.accordion-item-header::after {
  content: "\002B";
  font-size: 2rem;
  position: absolute;
  right: 1rem;
}

.accordion-item-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.accordion-item-body-content {
  color: #d79fae;
  padding: 1rem;
  line-height: 1.5rem;
  /* border-top: 1px solid #D79FAE; */
  @apply border-t-2 border-[#D79FAE] border-opacity-25 text-[17px] flex flex-col gap-7;
}

.question {
  @apply bg-[#FFF7F7] relative inline-block self-start;
}

@media (max-width: 767px) {
  html {
    font-size: 14px;
  }
}
</style>
