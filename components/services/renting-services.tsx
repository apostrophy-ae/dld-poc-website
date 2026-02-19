"use client";

import { useState } from "react";
import {
  Search,
  LayoutGrid,
  List,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function LeaseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M25.3346 6.66667H18.668V5.33333C18.668 4.59733 18.0706 4 17.3346 4H14.668C13.932 4 13.3346 4.59733 13.3346 5.33333V6.66667H6.66797C4.45864 6.66667 2.66797 8.45733 2.66797 10.6667V24C2.66797 26.2093 4.45864 28 6.66797 28H25.3346C27.544 28 29.3346 26.2093 29.3346 24V10.6667C29.3346 8.45733 27.544 6.66667 25.3346 6.66667Z"
        fill="url(#paint0_linear_2063_19783)"
      />
      <path
        d="M17.3346 4.66667C17.7026 4.66667 18.0013 4.96533 18.0013 5.33333V6.66667V7.33333H18.668H25.3346C27.172 7.33333 28.668 8.82933 28.668 10.6667V24C28.668 25.8373 27.172 27.3333 25.3346 27.3333H6.66797C4.83064 27.3333 3.33464 25.8373 3.33464 24V10.6667C3.33464 8.82933 4.83064 7.33333 6.66797 7.33333H13.3346H14.0013V6.66667V5.33333C14.0013 4.96533 14.3 4.66667 14.668 4.66667H17.3346ZM17.3346 4H14.668C13.932 4 13.3346 4.59733 13.3346 5.33333V6.66667H6.66797C4.45864 6.66667 2.66797 8.45733 2.66797 10.6667V24C2.66797 26.2093 4.45864 28 6.66797 28H25.3346C27.544 28 29.3346 26.2093 29.3346 24V10.6667C29.3346 8.45733 27.544 6.66667 25.3346 6.66667H18.668V5.33333C18.668 4.59733 18.0706 4 17.3346 4Z"
        fill="url(#paint1_linear_2063_19783)"
      />
      <path
        d="M10.6667 17.3333C12.1394 17.3333 13.3333 16.1394 13.3333 14.6667C13.3333 13.1939 12.1394 12 10.6667 12C9.19391 12 8 13.1939 8 14.6667C8 16.1394 9.19391 17.3333 10.6667 17.3333Z"
        fill="url(#paint2_linear_2063_19783)"
      />
      <path
        d="M13.9987 22.668H7.33203C6.22803 22.668 5.33203 21.772 5.33203 20.668C5.33203 19.564 6.22803 18.668 7.33203 18.668H13.9987C15.1027 18.668 15.9987 19.564 15.9987 20.668C15.9987 21.772 15.1027 22.668 13.9987 22.668Z"
        fill="url(#paint3_linear_2063_19783)"
      />
      <path
        d="M25.3327 13.3346H19.9993C19.2633 13.3346 18.666 12.7373 18.666 12.0013C18.666 11.2653 19.2633 10.668 19.9993 10.668H25.3327C26.0687 10.668 26.666 11.2653 26.666 12.0013C26.666 12.7373 26.0687 13.3346 25.3327 13.3346Z"
        fill="url(#paint4_linear_2063_19783)"
      />
      <path
        d="M25.3327 18.6667H19.9993C19.2633 18.6667 18.666 18.0693 18.666 17.3333C18.666 16.5973 19.2633 16 19.9993 16H25.3327C26.0687 16 26.666 16.5973 26.666 17.3333C26.666 18.0693 26.0687 18.6667 25.3327 18.6667Z"
        fill="url(#paint5_linear_2063_19783)"
      />
      <path
        d="M25.3327 23.9987H19.9993C19.2633 23.9987 18.666 23.4014 18.666 22.6654C18.666 21.9294 19.2633 21.332 19.9993 21.332H25.3327C26.0687 21.332 26.666 21.9294 26.666 22.6654C26.666 23.4014 26.0687 23.9987 25.3327 23.9987Z"
        fill="url(#paint6_linear_2063_19783)"
      />
      <path
        d="M17.334 9.33333H14.6673C13.9313 9.33333 13.334 8.736 13.334 8V5.33333C13.334 4.59733 13.9313 4 14.6673 4H17.334C18.07 4 18.6673 4.59733 18.6673 5.33333V8C18.6673 8.736 18.07 9.33333 17.334 9.33333Z"
        fill="url(#paint7_linear_2063_19783)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2063_19783"
          x1="5.1733"
          y1="6.50533"
          x2="26.8293"
          y2="28.1613"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2063_19783"
          x1="2.66797"
          y1="16"
          x2="29.3346"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="0.493" stop-color="white" stop-opacity="0" />
          <stop offset="0.997" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2063_19783"
          x1="8.78133"
          y1="12.7813"
          x2="12.552"
          y2="16.552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2063_19783"
          x1="7.58403"
          y1="17.588"
          x2="13.7454"
          y2="23.7493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2063_19783"
          x1="20.39"
          y1="9.7253"
          x2="24.942"
          y2="14.2773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2063_19783"
          x1="20.39"
          y1="15.0573"
          x2="24.942"
          y2="19.6093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2063_19783"
          x1="20.39"
          y1="20.3894"
          x2="24.942"
          y2="24.9414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2063_19783"
          x1="13.7247"
          y1="4.39067"
          x2="18.2767"
          y2="8.94267"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RentalIndexIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9864 5.19768C12.7478 3.74168 14.4904 2.65234 16.4544 2.65234C18.4184 2.65234 20.1624 3.74034 20.9224 5.19768C22.4904 4.70568 24.4918 5.16834 25.8824 6.55768C27.2718 7.94701 27.7344 9.94834 27.2424 11.5177C28.6984 12.279 29.7878 14.0217 29.7878 15.9857C29.7878 17.9497 28.6998 19.6923 27.2424 20.4537C27.7344 22.0217 27.2718 24.023 25.8824 25.4137C24.4931 26.803 22.4918 27.2657 20.9224 26.7737C20.1611 28.2297 18.4184 29.319 16.4544 29.319C14.4904 29.319 12.7478 28.231 11.9864 26.7737C10.4184 27.2657 8.41576 26.803 7.02643 25.4137C5.63709 24.0243 5.17443 22.0217 5.66643 20.4537C4.21043 19.6923 3.12109 17.9497 3.12109 15.9857C3.12109 14.0217 4.20909 12.2777 5.66643 11.5177C5.17443 9.94968 5.63709 7.94834 7.02643 6.55768C8.41576 5.16834 10.4184 4.70701 11.9864 5.19768Z"
        fill="url(#paint0_linear_2063_19806)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4558 3.31901C18.0918 3.31901 19.6491 4.19768 20.3331 5.50568L20.5918 5.99901L21.1238 5.83234C21.4624 5.72568 21.8278 5.67234 22.2104 5.67234C23.3838 5.67234 24.5518 6.16701 25.4131 7.02834C26.5691 8.18434 27.0504 9.90834 26.6091 11.3177L26.4424 11.8497L26.9358 12.1083C28.2438 12.7923 29.1224 14.351 29.1224 15.9857C29.1224 17.6217 28.2438 19.179 26.9358 19.863L26.4424 20.1217L26.6091 20.6537C27.0504 22.0617 26.5704 23.7857 25.4131 24.9417C24.5518 25.803 23.3838 26.2977 22.2104 26.2977C21.8278 26.2977 21.4624 26.2443 21.1238 26.1377L20.5918 25.971L20.3331 26.4657C19.6491 27.7737 18.0904 28.6523 16.4558 28.6523C14.8198 28.6523 13.2624 27.7737 12.5784 26.4657L12.3198 25.9723L11.7878 26.139C11.4491 26.2457 11.0838 26.299 10.7011 26.299C9.52776 26.299 8.35976 25.8043 7.49843 24.943C6.34243 23.787 5.86109 22.063 6.30243 20.655L6.46909 20.123L5.97576 19.8643C4.66776 19.1803 3.78909 17.6217 3.78909 15.987C3.78909 14.351 4.66776 12.7937 5.97576 12.1097L6.46909 11.851L6.30376 11.3177C5.86243 9.90834 6.34243 8.18434 7.49976 7.02834C8.36109 6.16701 9.52909 5.67234 10.7024 5.67234C11.0851 5.67234 11.4504 5.72568 11.7891 5.83234L12.3198 5.99901L12.5784 5.50568C13.2624 4.19768 14.8198 3.31901 16.4558 3.31901ZM16.4558 2.65234C14.4904 2.65234 12.7491 3.74034 11.9864 5.19768C11.5811 5.07101 11.1464 5.00701 10.7011 5.00701C9.42376 5.00701 8.05709 5.52701 7.02643 6.55768C5.63709 7.94701 5.17443 9.94834 5.66643 11.5177C4.21043 12.279 3.12109 14.0217 3.12109 15.987C3.12109 17.9523 4.20909 19.6937 5.66643 20.4563C5.17443 22.0243 5.63709 24.0257 7.02643 25.4163C8.05709 26.447 9.42376 26.967 10.7011 26.967C11.1464 26.967 11.5811 26.903 11.9864 26.7763C12.7478 28.2323 14.4904 29.3217 16.4558 29.3217C18.4211 29.3217 20.1638 28.2337 20.9251 26.7763C21.3304 26.903 21.7651 26.967 22.2104 26.967C23.4878 26.967 24.8544 26.447 25.8851 25.4163C27.2744 24.027 27.7371 22.0257 27.2451 20.4563C28.7011 19.695 29.7904 17.9523 29.7904 15.987C29.7904 14.0217 28.7024 12.279 27.2451 11.5177C27.7371 9.94968 27.2744 7.94701 25.8851 6.55768C24.8544 5.52701 23.4878 5.00701 22.2104 5.00701C21.7651 5.00701 21.3304 5.06968 20.9251 5.19768C20.1638 3.74034 18.4211 2.65234 16.4558 2.65234Z"
        fill="url(#paint1_linear_2063_19806)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6657 21.3337C14.3244 21.3337 13.983 21.203 13.723 20.943L9.72303 16.943C9.2017 16.4217 9.2017 15.579 9.72303 15.0577C10.2444 14.5363 11.087 14.5363 11.6084 15.0577L14.6657 18.115L20.3897 12.391C20.911 11.8697 21.7537 11.8697 22.275 12.391C22.7964 12.9123 22.7964 13.755 22.275 14.2763L15.6084 20.943C15.3484 21.203 15.007 21.3337 14.6657 21.3337Z"
        fill="url(#paint2_linear_2063_19806)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2063_19806"
          x1="7.02643"
          y1="6.55768"
          x2="25.8824"
          y2="25.415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2063_19806"
          x1="7.02776"
          y1="6.55634"
          x2="25.8838"
          y2="25.4137"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="0.493" stop-color="white" stop-opacity="0" />
          <stop offset="0.997" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2063_19806"
          x1="13.0564"
          y1="11.7243"
          x2="18.9417"
          y2="17.6097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="0.519" stop-color="white" stop-opacity="0.45" />
          <stop offset="1" stop-color="white" stop-opacity="0.55" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DisputeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M25.3333 13.3346H20V6.66797C20 4.45864 18.2093 2.66797 16 2.66797H8C5.79067 2.66797 4 4.45864 4 6.66797V14.668C4 16.8773 5.79067 18.668 8 18.668H13.3333V25.3346C13.3333 27.544 15.124 29.3346 17.3333 29.3346H25.3333C27.5427 29.3346 29.3333 27.544 29.3333 25.3346V17.3346C29.3333 15.1253 27.5427 13.3346 25.3333 13.3346Z"
        fill="url(#paint0_linear_2063_19820)"
      />
      <path
        d="M16 3.33464C17.8387 3.33464 19.3333 4.83064 19.3333 6.66797V13.3346V14.0013H20H25.3333C27.172 14.0013 28.6667 15.4973 28.6667 17.3346V25.3346C28.6667 27.172 27.172 28.668 25.3333 28.668H17.3333C15.4947 28.668 14 27.172 14 25.3346V18.668V18.0013H13.3333H8C6.16133 18.0013 4.66667 16.5053 4.66667 14.668V6.66797C4.66667 4.83064 6.16133 3.33464 8 3.33464H16ZM16 2.66797H8C5.79067 2.66797 4 4.45864 4 6.66797V14.668C4 16.8773 5.79067 18.668 8 18.668H13.3333V25.3346C13.3333 27.544 15.124 29.3346 17.3333 29.3346H25.3333C27.5427 29.3346 29.3333 27.544 29.3333 25.3346V17.3346C29.3333 15.1253 27.5427 13.3346 25.3333 13.3346H20V6.66797C20 4.45864 18.2093 2.66797 16 2.66797Z"
        fill="url(#paint1_linear_2063_19820)"
      />
      <path
        d="M13.3333 17.3346C13.3333 15.1253 15.124 13.3346 17.3333 13.3346H20V6.66797C20 4.45864 18.2093 2.66797 16 2.66797H8C5.79067 2.66797 4 4.45864 4 6.66797V14.668C4 16.8773 5.79067 18.668 8 18.668H13.3333V17.3346Z"
        fill="url(#paint2_linear_2063_19820)"
      />
      <path
        d="M10.9647 25.9533L7.84998 22.868C7.41132 22.4347 6.66732 22.7453 6.66732 23.3613V25.3333H5.33398C4.59798 25.3333 4.00065 24.7347 4.00065 24V21.3333C4.00065 20.5973 3.40465 20 2.66732 20C1.92998 20 1.33398 20.5973 1.33398 21.3333V24C1.33398 26.2053 3.12865 28 5.33398 28H6.66732V29.972C6.66732 30.588 7.41132 30.8987 7.84998 30.4653L10.9647 27.38C11.3607 26.9867 11.3607 26.3467 10.9647 25.9533Z"
        fill="url(#paint3_linear_2063_19820)"
      />
      <path
        d="M2.66732 20.6667C3.03532 20.6667 3.33398 20.9653 3.33398 21.3333V24C3.33398 25.1027 4.23132 26 5.33398 26H6.66732H7.33398V25.3333L7.38065 23.3427L10.4953 26.428C10.582 26.5133 10.5953 26.6147 10.5953 26.6667C10.5953 26.7187 10.582 26.82 10.4953 26.9053L7.33398 29.972V28V27.3333H6.66732H5.33398C3.49532 27.3333 2.00065 25.8387 2.00065 24V21.3333C2.00065 20.9653 2.29932 20.6667 2.66732 20.6667ZM2.66732 20C1.92998 20 1.33398 20.5973 1.33398 21.3333V24C1.33398 26.2053 3.12865 28 5.33398 28H6.66732V29.972C6.66732 30.3893 7.00998 30.6667 7.36598 30.6667C7.53532 30.6667 7.70865 30.604 7.84998 30.464L10.9647 27.3787C11.3607 26.9867 11.3607 26.3453 10.9647 25.9533L7.84998 22.868C7.70865 22.7293 7.53532 22.6667 7.36598 22.6667C7.00998 22.6667 6.66732 22.944 6.66732 23.3613V25.3333H5.33398C4.59798 25.3333 4.00065 24.7347 4.00065 24V21.3333C4.00065 20.5973 3.40465 20 2.66732 20Z"
        fill="url(#paint4_linear_2063_19820)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2063_19820"
          x1="4.83867"
          y1="4.1733"
          x2="28.4947"
          y2="27.8293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2063_19820"
          x1="4.83867"
          y1="4.1733"
          x2="28.4947"
          y2="27.8293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="0.493" stop-color="white" stop-opacity="0" />
          <stop offset="0.997" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2063_19820"
          x1="4"
          y1="10.668"
          x2="20"
          y2="10.668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="0.519" stop-color="white" stop-opacity="0.45" />
          <stop offset="1" stop-color="white" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2063_19820"
          x1="1.22998"
          y1="20.8853"
          x2="9.34465"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2063_19820"
          x1="1.22998"
          y1="20.8853"
          x2="9.34465"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="0.493" stop-color="white" stop-opacity="0" />
          <stop offset="0.997" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BrokerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M25.3333 27.9985H6.66667C5.19333 27.9985 4 26.8052 4 25.3319V11.6852C4 10.2319 4.788 8.89452 6.05733 8.18919L14.0573 3.74519C15.2653 3.07452 16.7347 3.07452 17.9427 3.74519L25.9427 8.18919C27.212 8.89452 28 10.2332 28 11.6852V25.3319C28 26.8052 26.8067 27.9985 25.3333 27.9985Z"
        fill="url(#paint0_linear_2063_19837)"
      />
      <path
        d="M16 3.90885C16.5653 3.90885 17.1253 4.05419 17.6187 4.32752L25.6187 8.77152C26.676 9.35952 27.3333 10.4755 27.3333 11.6849V25.3315C27.3333 26.4342 26.436 27.3315 25.3333 27.3315H6.66667C5.564 27.3315 4.66667 26.4342 4.66667 25.3315V11.6849C4.66667 10.4755 5.324 9.35952 6.38133 8.77152L14.3813 4.32752C14.8747 4.05285 15.4347 3.90885 16 3.90885ZM16 3.24219C15.3307 3.24219 14.6613 3.41019 14.0573 3.74485L6.05733 8.18885C4.788 8.89419 4 10.2315 4 11.6849V25.3315C4 26.8049 5.19333 27.9982 6.66667 27.9982H25.3333C26.8067 27.9982 28 26.8049 28 25.3315V11.6849C28 10.2329 27.212 8.89419 25.9427 8.18885L17.9427 3.74485C17.3387 3.41019 16.6693 3.24219 16 3.24219Z"
        fill="url(#paint1_linear_2063_19837)"
      />
      <path
        d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z"
        fill="url(#paint2_linear_2063_19837)"
      />
      <path
        d="M19.9987 18.668H11.9987C10.5254 18.668 9.33203 19.8613 9.33203 21.3346C9.33203 22.808 10.5254 24.0013 11.9987 24.0013H19.9987C21.472 24.0013 22.6654 22.808 22.6654 21.3346C22.6654 19.8613 21.472 18.668 19.9987 18.668Z"
        fill="url(#paint3_linear_2063_19837)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2063_19837"
          x1="5.89733"
          y1="8.13052"
          x2="26.1013"
          y2="28.3345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2063_19837"
          x1="5.89733"
          y1="8.13019"
          x2="26.1013"
          y2="28.3342"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.6" />
          <stop offset="0.493" stop-color="white" stop-opacity="0" />
          <stop offset="0.997" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2063_19837"
          x1="13.172"
          y1="9.172"
          x2="18.828"
          y2="14.828"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="0.519" stop-color="white" stop-opacity="0.45" />
          <stop offset="1" stop-color="white" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2063_19837"
          x1="12.1134"
          y1="17.4493"
          x2="19.884"
          y2="25.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.7" />
          <stop offset="0.519" stop-color="white" stop-opacity="0.45" />
          <stop offset="1" stop-color="white" stop-opacity="0.55" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const services = [
  {
    title: "Lease to Own",
    caption:
      "Explore structured agreements that allow tenants to rent a property with the option to purchase in the future.",
    Icon: LeaseIcon,
  },
  {
    title: "Rental Index",
    caption:
      "Check the official RERA-approved rental range for your area and property type to ensure the asking is correct.",
    Icon: RentalIndexIcon,
  },
  {
    title: "Raise a Dispute",
    caption:
      "Submit and manage rental disputes through the official Rental Dispute Settlement Centre.",
    Icon: DisputeIcon,
  },
  {
    title: "Find a Broker",
    caption:
      "Search and verify licensed RERA-approved brokers to ensure you’re working with authorised professionals.",
    Icon: BrokerIcon,
  },
];
const filterOptions = ["Alphabetical", "Most Popular", "Newest"];

export function RentingServices() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Alphabetical");

  const filtered = services.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.caption.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-dld-surface py-20 mt-15">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center mb-2 text-3xl font-bold text-dld-black md:text-4xl mb-10">
          Renting Services
        </h2>

        {/* Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
          {/* Search pill */}
          <div className="flex h-14 flex-1 items-center gap-3 rounded-full border border-dld-border bg-white/40 px-6 md:max-w-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="min-w-0 flex-1 bg-transparent text-base text-dld-black placeholder:text-dld-text-secondary outline-none font-dubai"
              aria-label="Search services"
            />
            <Search className="size-5 shrink-0 text-dld-text-secondary" />
          </div>

          <div className="flex items-center gap-4">
            {/* Filter dropdown */}
            <div className="relative flex h-14 w-64 items-center gap-2 rounded-full border border-dld-border bg-white/40 px-6">
              <div className="flex flex-1 flex-col">
                <span className="text-xs leading-none text-dld-text-secondary">
                  Filter by
                </span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="mt-0.5 w-full appearance-none bg-transparent text-sm font-bold text-dld-black outline-none cursor-pointer"
                  aria-label="Filter services"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="size-5 shrink-0 text-dld-text-secondary pointer-events-none" />
            </div>

            {/* Grid / List toggle */}
            <div className="flex h-14 items-center gap-1 rounded-full border border-dld-border bg-white/40 px-4">
              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  view === "grid"
                    ? "bg-dld-white text-dld-black shadow-sm"
                    : "text-dld-text-secondary hover:text-dld-black",
                )}
              >
                <LayoutGrid className="size-5" />
              </button>
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  view === "list"
                    ? "bg-dld-white text-dld-black shadow-sm"
                    : "text-dld-text-secondary hover:text-dld-black",
                )}
              >
                <List className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            view === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "flex flex-col gap-4",
          )}
        >
          {filtered.map((service) => (
            <div
              key={service.title}
              className={cn(
                "flex flex-col group rounded-2xl border border-dld-border bg-dld-white p-6 transition-all hover:border-dld-green hover:shadow-[var(--dld-shadow-card)]",
                view === "list" && "flex items-center gap-4",
              )}
            >
              <div className="bg-dld-green w-fit p-1 rounded-md mb-2 flex ">
                <service.Icon className="size-12 text-dld-green shrink-0" />
              </div>

              <div
                className={
                  "flex flex-col flex-1 gap-2 h-full" +
                  (view === "list" ? "flex-1" : "")
                }
              >
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-dld-black">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-dld-text-secondary">
                    {service.caption}
                  </p>
                </div>
                <Badge className="mt-3 rounded-full bg-dld-green-bg text-dld-green border-0 text-xs px-6 py-5 cursor-pointer hover:bg-dld-green hover:text-dld-white transition-colors">
                  Explore
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="text-dld-green rounded-full gap-2 p-5 border-dld-border hover:border-dld-green"
          >
            Show more
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
