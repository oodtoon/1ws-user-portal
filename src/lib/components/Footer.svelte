<script lang="ts">
  import LogoIcon from "./icons/LogoIcon.svelte";
  import FacebookIcon from "./icons/FacebookIcon.svelte";
  import XIcon from "./icons/XIcon.svelte";
  import LinkedInIcon from "./icons/LinkedInIcon.svelte";
  import YoutubeIcon from "./icons/YoutubeIcon.svelte";
  import FooterLink from "./ui/FooterLink.svelte";

  let date = new Date();
</script>

<footer class="grid gap-2 bg-primary text-white p-8">
  <section class="flex gap-8 justify-center">
    <div class="grid gap-4 max-w-60">
      <LogoIcon />
      <p class="text-sm">
        1WorldSync is the leader in Product Content Orchestration
      </p>
      <div class="flex justify-between">
        <FooterLink href="https://www.facebook.com/1worldsync/"><FacebookIcon /></FooterLink
        >
        <FooterLink href="https://twitter.com/1worldsync?lang=en"><XIcon /></FooterLink>
        <FooterLink href="https://www.linkedin.com/company/1worldsync/"
          ><LinkedInIcon /></FooterLink
        >
        <FooterLink href="https://www.youtube.com/@1worldsync"><YoutubeIcon /></FooterLink>
      </div>
    </div>
    <div class="grid gap-4">
      <h4>Support & Resources</h4>
      <ul class="flex flex-col">
        <li>
          <FooterLink href="https://1worldsync.com/resource-center/support/"
            >Support</FooterLink
          >
        </li>
        <li>
          <FooterLink href="https://1worldsync.com/resource-center/blog/">Blog</FooterLink>
        </li>
        <li>
          <FooterLink href="https://1worldsync.com/resource-center/customer-stories/"
            >Customer Stories</FooterLink
          >
        </li>
        <li>
          <FooterLink
            href="https://community-routing.cs.1worldsync.com/?redirectreason=notregistered&referer=https%3A%2F%2Fcommunity.1worldsync.com%2F"
            >Community Login</FooterLink
          >
        </li>
        <li>
          <FooterLink
            href="https://store.1worldsync.com/sca-dev-2023-1-0/checkout.ssp?is=login&login=T#login-register"
            >1WorldSync Store</FooterLink
          >
        </li>
      </ul>
    </div>
  </section>
  <section class="flex justify-between text-xs">
    <p>©{date.getFullYear()} 1WorldSync All Rights Reserved</p>
    <ul class="flex gap-6">
      <li>
        <FooterLink href="https://1worldsync.com/privacy-policy/">Privacy Policy</FooterLink
        >
      </li>
      <li>
        <FooterLink
          href="https://1worldsync.com/privacy-policy/applicants-employees-contractors/"
          >Applicants, Employees & Contractors Privacy Notice</FooterLink
        >
      </li>
      <li>
        <FooterLink href="https://1worldsync.com/terms-of-use/">Terms of Use</FooterLink>
      </li>
      <li>
        <FooterLink href="https://1worldsync.com/security/">Security</FooterLink>
      </li>
      <li>
        <FooterLink href="https://1worldsync.com/antitrust-statement/"
          >Antitrust Statement</FooterLink
        >
      </li>
    </ul>
  </section>
</footer>
