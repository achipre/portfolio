export const IconsPortfolio = ({fill}) => {
  return (
    <svg className={`w-6 h-6 sm:w-10 sm:h-10 md:hidden lg:block ${fill === 0 ? 'fill-primary': 'fill-secondary'}`} width="88" height="76" viewBox="0 0 88 76">
      <path d="M81.5 19.25H62.75V6.75C62.75 5.0924 62.0915 3.50268 60.9194 2.33058C59.7473 1.15848 58.1576 0.5 56.5 0.5H31.5C29.8424 0.5 28.2527 1.15848 27.0806 2.33058C25.9085 3.50268 25.25 5.0924 25.25 6.75V19.25H6.5C4.8424 19.25 3.25268 19.9085 2.08058 21.0806C0.90848 22.2527 0.25 23.8424 0.25 25.5V69.25C0.25 70.9076 0.90848 72.4973 2.08058 73.6694C3.25268 74.8415 4.8424 75.5 6.5 75.5H81.5C83.1576 75.5 84.7473 74.8415 85.9194 73.6694C87.0915 72.4973 87.75 70.9076 87.75 69.25V25.5C87.75 23.8424 87.0915 22.2527 85.9194 21.0806C84.7473 19.9085 83.1576 19.25 81.5 19.25ZM31.5 6.75H56.5V19.25H31.5V6.75Z"/>
    </svg>

  )
}
export const IconsTechs = ({fill}) => {
  return (
    <svg className={`w-4 h-4 sm:w-6 sm:h-6 md:hidden lg:block ${fill === 0 ? 'fill-primary': 'fill-secondary'}`} width="88" height="76" viewBox="0 0 88 76">
      <path d="M16.6667 66.6667H66.6667V16.6667H16.6667V66.6667ZM50 75H33.3333V83.3333H25V75H12.5C11.3949 75 10.3351 74.561 9.55372 73.7796C8.77232 72.9982 8.33333 71.9384 8.33333 70.8333V58.3333H0V50H8.33333V33.3333H0V25H8.33333V12.5C8.33333 11.3949 8.77232 10.3351 9.55372 9.55372C10.3351 8.77232 11.3949 8.33333 12.5 8.33333H25V0H33.3333V8.33333H50V0H58.3333V8.33333H70.8333C71.9384 8.33333 72.9982 8.77232 73.7796 9.55372C74.561 10.3351 75 11.3949 75 12.5V25H83.3333V33.3333H75V50H83.3333V58.3333H75V70.8333C75 71.9384 74.561 72.9982 73.7796 73.7796C72.9982 74.561 71.9384 75 70.8333 75H58.3333V83.3333H50V75ZM25 25H58.3333V58.3333H25V25Z" />
    </svg>
  )
}
export const IconsTechVite = ({isActive, isPrimary}) => {
  console.log(isActive);
  return (
    <svg className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14" width="90" height="91" viewBox="0 0 90 91" >
      {isActive ? 
      <>
        <path d="M89.7093 13.342L47.4255 88.9522C47.227 89.3079 46.9374 89.6043 46.5866 89.8112C46.2358 90.018 45.8362 90.1279 45.4289 90.1296C45.0217 90.1312 44.6213 90.0245 44.2688 89.8205C43.9163 89.6164 43.6244 89.3223 43.423 88.9683L0.302631 13.3484C0.0858378 12.969 -0.0182372 12.5356 0.00261831 12.0991C0.0234738 11.6626 0.168395 11.2411 0.420376 10.8841C0.672356 10.5271 1.02094 10.2493 1.42523 10.0834C1.82951 9.91757 2.27272 9.87043 2.70285 9.94759L45.0317 17.515C45.3008 17.5645 45.5766 17.5645 45.8457 17.515L87.2898 9.96046C87.7183 9.88216 88.1602 9.92729 88.564 10.0906C88.9677 10.2539 89.3168 10.5286 89.5704 10.8827C89.824 11.2368 89.9717 11.6557 89.9963 12.0906C90.0209 12.5254 89.9214 12.9616 89.7093 13.342Z" fill="url(#paint0_linear_197_50)"/>
        <path d="M65.1925 0.0250196L33.9059 6.15428C33.6562 6.20471 33.4301 6.33608 33.2626 6.52802C33.095 6.71997 32.9955 6.96179 32.9793 7.21604L31.0553 39.7252C31.0446 39.9036 31.0758 40.0819 31.1462 40.2461C31.2166 40.4103 31.3243 40.5559 31.4608 40.6711C31.5973 40.7864 31.7588 40.8682 31.9325 40.9101C32.1062 40.952 32.2872 40.9528 32.4613 40.9125L41.1709 38.9016C41.3586 38.8582 41.5541 38.8627 41.7395 38.9147C41.925 38.9667 42.0944 39.0644 42.2321 39.199C42.3699 39.3336 42.4716 39.5006 42.5279 39.6848C42.5843 39.8689 42.5934 40.0643 42.5544 40.2529L39.9676 52.9265C39.9277 53.1216 39.9392 53.3237 40.001 53.513C40.0627 53.7023 40.1727 53.8723 40.32 54.0064C40.4673 54.1404 40.6469 54.2338 40.8412 54.2774C41.0356 54.321 41.2379 54.3134 41.4283 54.2553L46.8079 52.6208C46.9987 52.5624 47.2014 52.5547 47.396 52.5985C47.5907 52.6423 47.7706 52.736 47.918 52.8704C48.0654 53.0048 48.1753 53.1754 48.2368 53.3652C48.2982 53.5549 48.3092 53.7575 48.2686 53.9528L44.1535 73.8592C43.8961 75.1044 45.5531 75.7833 46.2449 74.7183L46.705 74.004L72.2033 23.1199C72.299 22.9282 72.3392 22.7135 72.3193 22.5002C72.2994 22.2868 72.2202 22.0833 72.0906 21.9125C71.9611 21.7418 71.7864 21.6108 71.5863 21.5342C71.3861 21.4576 71.1686 21.4385 70.9582 21.479L61.9911 23.2068C61.7981 23.2437 61.5988 23.2305 61.4124 23.1685C61.2259 23.1064 61.0585 22.9975 60.9261 22.8522C60.7938 22.707 60.7009 22.5302 60.6564 22.3388C60.6119 22.1473 60.6172 21.9477 60.6719 21.7589L66.5213 1.46966C66.5764 1.28029 66.5818 1.07992 66.5371 0.887841C66.4923 0.695764 66.3988 0.518452 66.2656 0.372985C66.1324 0.227517 65.964 0.118793 65.7766 0.0572854C65.5892 -0.00422254 65.3892 -0.0164424 65.1957 0.0218024" fill="url(#paint1_linear_197_50)"/> 
      <defs>
        <linearGradient id="paint0_linear_197_50" x1="-0.751022" y1="7.24447" x2="51.8711" y2="78.7094" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/>
          <stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
        <linearGradient id="paint1_linear_197_50" x1="42.5994" y1="1.68774" x2="52.1185" y2="66.9876" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83"/>
          <stop offset="0.083" stopColor="#FFDD35"/>
          <stop offset="1" stopColor="#FFA800"/>
        </linearGradient>
      </defs>
      </>
      :
      <path className={`${isPrimary === 0 ? "fill-primary" : 'fill-secondary'}`} d="M87.2816 10.2985L62.768 14.7666L67.0277 0L33.01 6.66563L32.48 15.6149L2.67644 10.2877C0.623808 10.1683 -0.572251 11.6423 0.275311 13.6889L43.4055 89.3233C44.3339 90.8387 46.4712 90.8979 47.4083 89.3233L89.7 13.6817C90.6543 11.9717 89.1921 9.96734 87.2816 10.2985ZM45.3983 87.2498L3.15801 13.1757L32.316 18.3875L30.9415 41.6026L42.8936 38.8444L39.5609 55.1636L48.6399 52.4054L44.1344 74.2124C43.9099 75.6384 45.7674 76.3971 46.6862 74.3559L73.2335 21.3759L60.1322 23.9044L61.9146 17.7258L86.8166 13.1869L45.3983 87.2498Z"/>
      }
    </svg>
  )
}
export const IconsTechReact = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14 ${isActive ? 'fill-[#00D8FF]': isPrimary === 0 ? 'fill-primary': 'fill-secondary'}`} width="90" height="90" viewBox="0 0 90 90" > 
      <path d="M73.9979 30.9537C73.0401 30.6251 72.0742 30.3206 71.1011 30.0407C71.2645 29.3727 71.415 28.7128 71.5486 28.0645C73.7416 17.4189 72.308 8.84252 67.4111 6.01877C62.7159 3.31174 55.0375 6.13443 47.2827 12.8834C46.5184 13.5497 45.7711 14.2352 45.0415 14.9393C44.553 14.4711 44.056 14.012 43.5505 13.5622C35.4231 6.34607 27.2767 3.3047 22.385 6.13654C17.6941 8.85201 16.3051 16.9144 18.2795 27.0035C18.4759 28.0028 18.6977 28.9968 18.9446 29.9848C17.7915 30.3124 16.6788 30.6612 15.6139 31.0324C6.08519 34.3547 0 39.561 0 44.9613C0 50.5389 6.53273 56.1333 16.4573 59.5255C17.262 59.7994 18.0733 60.0532 18.8905 60.2867C18.6251 61.3507 18.3894 62.422 18.1839 63.4992C16.3016 73.4133 17.7715 81.2851 22.4497 83.9834C27.2816 86.7699 35.3914 83.906 43.2879 77.0031C43.9282 76.4419 44.5544 75.8648 45.1659 75.2724C45.9561 76.0347 46.7673 76.7749 47.5987 77.4921C55.248 84.0741 62.8024 86.7319 67.4761 84.0263C72.3034 81.2317 73.8724 72.7752 71.8355 62.4867C71.675 61.6807 71.4951 60.8787 71.2958 60.0813C71.8654 59.9126 72.4243 59.7389 72.9693 59.5582C83.2869 56.14 90 50.6134 90 44.9613C90 39.5413 83.7183 34.2999 73.9979 30.9537ZM71.7602 55.909C71.268 56.0718 70.7632 56.2289 70.2485 56.3819C69.1095 52.7759 67.5724 48.9417 65.6912 44.98C67.4863 41.1128 68.9643 37.3275 70.0713 33.7451C70.9921 34.0116 71.8854 34.2925 72.7467 34.5888C81.0752 37.4562 86.1553 41.695 86.1553 44.9613C86.1553 48.4404 80.6688 52.9569 71.7602 55.909ZM68.0639 63.2335C68.9646 67.7827 69.0929 71.896 68.4963 75.1117C67.9605 78.0012 66.8827 79.9274 65.5495 80.6991C62.7135 82.3409 56.648 80.2069 50.1064 74.5777C49.3331 73.9109 48.5785 73.2227 47.8434 72.514C50.3796 69.7405 52.914 66.5163 55.3876 62.9353C59.7386 62.5493 63.849 61.9179 67.5766 61.0562C67.7562 61.778 67.9187 62.504 68.0639 63.2335ZM30.683 80.4154C27.912 81.3938 25.7048 81.4219 24.3707 80.6527C21.5318 79.0154 20.3516 72.6947 21.9614 64.2164C22.1528 63.2146 22.3719 62.2182 22.6185 61.2285C26.305 62.0441 30.3855 62.6305 34.7467 62.9842C37.2371 66.4882 39.8447 69.7089 42.4726 72.5291C41.9141 73.0695 41.3424 73.5961 40.758 74.1083C37.266 77.1606 33.7669 79.3262 30.683 80.4154ZM17.7012 55.8876C13.3126 54.3874 9.68836 52.438 7.20422 50.3107C4.9718 48.3993 3.84504 46.5012 3.84504 44.9613C3.84504 41.6841 8.7307 37.504 16.8796 34.663C17.8685 34.3185 18.9035 33.9933 19.9775 33.6881C21.1039 37.3514 22.5812 41.1817 24.364 45.0549C22.558 48.9853 21.0596 52.8768 19.9223 56.5833C19.1764 56.3696 18.4358 56.1376 17.7012 55.8876ZM22.0528 26.2649C20.3614 17.621 21.4847 11.1006 24.3116 9.46408C27.3224 7.72103 33.9803 10.2062 40.9978 16.4373C41.4554 16.8446 41.9056 17.2601 42.3482 17.6836C39.7332 20.4915 37.1496 23.6883 34.6813 27.1716C30.4485 27.5639 26.3967 28.1939 22.6716 29.038C22.4421 28.1191 22.2357 27.1942 22.0528 26.2649ZM60.8748 35.8517C59.9949 34.3318 59.0824 32.8311 58.1379 31.3506C61.0095 31.7138 63.7608 32.1958 66.3444 32.785C65.5689 35.2712 64.6021 37.8703 63.4641 40.5352C62.6322 38.9569 61.769 37.3954 60.8748 35.8517ZM45.0432 20.4318C46.8165 22.3531 48.5926 24.4979 50.3395 26.8253C46.7958 26.6579 43.2461 26.6572 39.7023 26.8232C41.451 24.5173 43.2422 22.3752 45.0432 20.4318ZM29.1101 35.8777C28.2271 37.409 27.3799 38.9608 26.5693 40.5317C25.45 37.8763 24.492 35.2652 23.7097 32.7438C26.2775 32.1694 29.0159 31.6997 31.8691 31.3432C30.9141 32.8328 29.9942 34.3449 29.1101 35.8777ZM31.9511 58.853C29.0032 58.5239 26.2238 58.0785 23.6566 57.5195C24.4512 54.9531 25.4303 52.2865 26.5739 49.5742C27.3877 51.1462 28.2384 52.6989 29.1252 54.231C30.0371 55.806 30.9814 57.3486 31.9511 58.853ZM45.1494 69.762C43.3269 67.796 41.5093 65.6209 39.7343 63.2816C41.4577 63.3491 43.2144 63.3836 45 63.3836C46.8345 63.3836 48.6478 63.3424 50.4327 63.263C48.6802 65.6445 46.9107 67.8228 45.1494 69.762ZM63.5003 49.4357C64.7033 52.1779 65.7172 54.8304 66.5223 57.3529C63.913 57.9484 61.0956 58.4279 58.127 58.7841C59.0782 57.2761 59.9994 55.7493 60.8899 54.2046C61.7953 52.6345 62.6656 51.0445 63.5003 49.4357ZM57.5596 52.2837C56.1963 54.6519 54.7563 56.9752 53.242 59.2499C50.499 59.4442 47.7499 59.5407 45 59.5392C42.1991 59.5392 39.4748 59.452 36.8515 59.2819C35.2977 57.0125 33.8302 54.6851 32.4524 52.3048C31.081 49.937 29.8004 47.5181 28.6126 45.0531C29.7974 42.5876 31.0744 40.1674 32.4411 37.7979L32.4408 37.7983C33.807 35.4281 35.2626 33.1107 36.8047 30.851C39.4812 30.6485 42.2258 30.5431 44.9996 30.5431C47.7861 30.5431 50.5346 30.6496 53.2104 30.8535C54.7369 33.1098 56.1833 35.4192 57.5469 37.7775C58.9182 40.1418 60.2121 42.5501 61.4268 44.9986C60.2246 47.4721 58.9347 49.902 57.5596 52.2837ZM65.4908 9.34947C68.5044 11.0876 69.6765 18.0967 67.783 27.2883C67.6621 27.8747 67.5264 28.472 67.3787 29.0777C63.6444 28.2157 59.5898 27.5748 55.3447 27.1765C52.8718 23.6549 50.3093 20.4532 47.7369 17.6815C48.4111 17.0316 49.1013 16.3986 49.8069 15.7831C56.4514 10.0009 62.6614 7.71787 65.4908 9.34947ZM45 36.9246C49.4385 36.9246 53.0367 40.5229 53.0367 44.9613C53.0367 49.3998 49.4385 52.9981 45 52.9981C40.5615 52.9981 36.9633 49.3998 36.9633 44.9613C36.9633 40.5229 40.5615 36.9246 45 36.9246Z" />
    </svg>
  )
}
export const IconsTechVue = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14`} width="90" height="77" viewBox="0 0 90 77">
      {isActive ? 
      <>
        <path d="M0 0L45 77L90 0H72L45 46.2L17.775 0H0Z" fill="#41B883"/>
        <path d="M17.775 0L45.0001 46.4232L72 0H55.3501L45.0001 17.8551L34.4251 0H17.775Z" fill="#35495E"/>
      </>
      :
      <path  className={`${isPrimary === 0 ? "fill-primary" : 'fill-secondary'}`} d="M71.6979 0H56.25L45 17.7786L35.3571 0H0L45 77L90 0H71.6979ZM7 4H20L45 46.1949L70.5 4H83.5L45 68.5L7 4Z" />
      }
    </svg>
  )
}
export const IconsTechAngular = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14`} width="76" height="80" viewBox="0 0 76 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isActive ? 
      <>
        <path d="M75.625 13.3125L72.875 56.1875L46.75 0L75.625 13.3125ZM57.5 68.75L37.8125 80L18.125 68.75L22.125 59.0625H53.5625L57.5 68.75ZM37.8125 21.3125L48.125 46.4375H27.5L37.8125 21.3125ZM2.75 56.1875L0 13.3125L28.875 0L2.75 56.1875Z" fill="url(#paint0_linear_201_166)"/>
        <path d="M75.625 13.3125L72.875 56.1875L46.75 0L75.625 13.3125ZM57.5 68.75L37.8125 80L18.125 68.75L22.125 59.0625H53.5625L57.5 68.75ZM37.8125 21.3125L48.125 46.4375H27.5L37.8125 21.3125ZM2.75 56.1875L0 13.3125L28.875 0L2.75 56.1875Z" fill="url(#paint1_linear_201_166)"/>
        <defs>
          <linearGradient id="paint0_linear_201_166" x1="7.0025" y1="52.3312" x2="67.1781" y2="23.735" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E40035"/>
          <stop offset="0.24" stopColor="#F60A48"/>
          <stop offset="0.352" stopColor="#F20755"/>
          <stop offset="0.494" stopColor="#DC087D"/>
          <stop offset="0.745" stopColor="#9717E7"/>
          <stop offset="1" stopColor="#6C00F5"/>
          </linearGradient>
          <linearGradient id="paint1_linear_201_166" x1="15.7706" y1="8.08062" x2="55.1512" y2="53.0031" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF31D9"/>
          <stop offset="1" stopColor="#FF5BE1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </>
      :
        <path className={`${isPrimary === 0 ? "fill-primary" : 'fill-secondary'}`} d="M53.5 59.0367H22.0867L18.0733 68.7567L37.7933 80L57.5133 68.7567L53.5 59.0367ZM46.7667 0L72.8733 56.1833L75.5867 13.33L46.7667 0ZM28.82 0L0 13.33L2.71333 56.1833L28.82 0ZM27.47 46.4333H48.13L37.7933 21.32L27.47 46.4333Z" />
      }
    </svg>
  )
}
export const IconsTechNode = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14 ${isActive ? 'fill-[#83CD29]': isPrimary === 0 ? 'fill-primary': 'fill-secondary'}`} width="71" height="80" viewBox="0 0 71 80" >
      <path d="M35.4727 80C34.3934 80.0005 33.333 79.7167 32.3983 79.1771L22.6151 73.3855C21.155 72.5683 21.8665 72.2797 22.3494 72.1112C23.9025 71.6322 25.3894 70.9603 26.7752 70.1111C26.8911 70.0566 27.019 70.033 27.1467 70.0425C27.2743 70.052 27.3973 70.0943 27.5038 70.1654L35.0212 74.6312C35.1612 74.7053 35.3171 74.744 35.4755 74.744C35.6339 74.744 35.7898 74.7053 35.9298 74.6312L65.2451 57.7107C65.3829 57.6291 65.4968 57.5129 65.5755 57.3735C65.6542 57.2341 65.695 57.0764 65.6937 56.9164V23.0695C65.694 22.907 65.6524 22.7472 65.5728 22.6055C65.4932 22.4638 65.3784 22.3451 65.2394 22.2609L35.9241 5.35462C35.7861 5.27595 35.63 5.23458 35.4712 5.23458C35.3124 5.23458 35.1563 5.27595 35.0184 5.35462L5.72022 22.2666C5.58047 22.3493 5.46443 22.4666 5.38334 22.6073C5.30224 22.7479 5.25885 22.9071 5.25735 23.0695V56.9021C5.2592 57.0613 5.30262 57.2173 5.3833 57.3547C5.46399 57.492 5.57914 57.6058 5.71737 57.685L13.7576 62.3251C18.1149 64.5023 20.7836 61.9365 20.7836 59.3593V25.9553C20.7836 25.728 20.8739 25.51 21.0346 25.3492C21.1954 25.1885 21.4134 25.0981 21.6408 25.0981H25.3552C25.5825 25.0981 25.8005 25.1885 25.9613 25.3492C26.122 25.51 26.2123 25.728 26.2123 25.9553V59.3622C26.2123 65.1766 23.0465 68.5053 17.532 68.5053C15.1533 68.545 12.812 67.909 10.7804 66.671L3.07442 62.2508C2.1397 61.7052 1.3641 60.9243 0.824739 59.986C0.28538 59.0476 0.00105249 57.9844 2.96474e-05 56.9021V23.0695C-0.00333097 21.9851 0.279066 20.919 0.818786 19.9786C1.35851 19.0381 2.1365 18.2564 3.07442 17.7122L32.3926 0.785892C33.3373 0.270225 34.3964 0 35.4727 0C36.549 0 37.608 0.270225 38.5528 0.785892L67.868 17.7122C68.8024 18.257 69.5781 19.0368 70.1179 19.9741C70.6577 20.9114 70.943 21.9736 70.9453 23.0552V56.9021C70.944 57.9847 70.6592 59.0481 70.1193 59.9865C69.5795 60.9249 68.8033 61.7055 67.868 62.2508L38.5528 79.1771C37.6164 79.7177 36.5539 80.0015 35.4727 80Z" />
      <path d="M29.9126 45.5789C29.9126 45.3515 30.0029 45.1335 30.1637 44.9727C30.3244 44.812 30.5425 44.7217 30.7698 44.7217H34.5613C34.7639 44.7223 34.9597 44.7947 35.114 44.926C35.2683 45.0573 35.3711 45.239 35.4042 45.4389C35.9757 49.299 37.69 51.2448 45.4417 51.2448C51.6162 51.2448 54.2477 49.8476 54.2477 46.5703C54.2477 44.6817 53.502 43.2788 43.9045 42.3388C35.8814 41.5444 30.9212 39.7672 30.9212 33.3556C30.9212 27.4411 35.9071 23.9124 44.2645 23.9124C53.6563 23.9124 58.305 27.1725 58.8936 34.167C58.9026 34.2838 58.8875 34.4012 58.8494 34.5119C58.8113 34.6227 58.7509 34.7244 58.6719 34.8109C58.5929 34.8974 58.497 34.9668 58.3902 35.0147C58.2834 35.0627 58.1678 35.0883 58.0507 35.0899H54.2334C54.0419 35.0873 53.8569 35.0205 53.7077 34.9004C53.5586 34.7802 53.4539 34.6136 53.4106 34.4271C52.4991 30.3669 50.2676 29.0697 44.2674 29.0697C37.5243 29.0697 36.7414 31.4184 36.7414 33.1784C36.7414 35.3099 37.6672 35.9328 46.7703 37.1357C55.7792 38.3272 60.0593 40.013 60.0593 46.3446C60.0593 52.7334 54.7335 56.3907 45.4446 56.3907C32.6013 56.4078 29.9126 50.519 29.9126 45.5789Z"/>
    </svg>
  )
}
export const IconsTechFigma = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14`} width="55" height="80" viewBox="0 0 55 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isActive ? 
      <>
        <path d="M14.3333 80C21.7132 80 27.6667 74.0465 27.6667 66.6667V53.3333H14.3333C6.95349 53.3333 1 59.2868 1 66.6667C1 74.0465 6.95349 80 14.3333 80Z" fill="#0ACF83"/>
        <path d="M1 40C1 32.6202 6.95349 26.6667 14.3333 26.6667H27.6667V53.3333H14.3333C6.95349 53.3333 1 47.3798 1 40Z" fill="#A259FF"/>
        <path d="M1 13.3333C1 5.95349 6.95349 0 14.3333 0H27.6667V26.6667H14.3333C6.95349 26.6667 1 20.7132 1 13.3333Z" fill="#F24E1E"/>
        <path d="M27.6667 0H41C48.3798 0 54.3333 5.95349 54.3333 13.3333C54.3333 20.7132 48.3798 26.6667 41 26.6667H27.6667V0Z" fill="#FF7262"/>
        <path d="M54.3333 40C54.3333 47.3798 48.3798 53.3333 41 53.3333C33.6202 53.3333 27.6667 47.3798 27.6667 40C27.6667 32.6202 33.6202 26.6667 41 26.6667C48.3798 26.6667 54.3333 32.6202 54.3333 40Z" fill="#1ABCFE"/>
      </>
      :
      <path className={`${isPrimary === 0 ? "stroke-primary" : 'stroke-secondary'}`} d="M40 27.3333C33.0044 27.3333 27.3333 33.0044 27.3333 40C27.3333 46.9956 33.0044 52.6667 40 52.6667C46.9956 52.6667 52.6667 46.9956 52.6667 40C52.6667 33.0044 46.9956 27.3333 40 27.3333ZM40 27.3333C43.3594 27.3333 46.5812 25.9988 48.9567 23.6234C51.3322 21.2479 52.6667 18.0261 52.6667 14.6667C52.6667 11.3073 51.3322 8.08544 48.9567 5.70998C46.5812 3.33452 43.3594 2 40 2H27.3333M40 27.3333L27.3333 27.3333M14.6667 52.6667C12.1614 52.6667 9.71247 53.4096 7.62945 54.8014C5.54643 56.1932 3.92291 58.1715 2.9642 60.486C2.00549 62.8005 1.75465 65.3474 2.24339 67.8045C2.73214 70.2616 3.93852 72.5186 5.70999 74.29C7.48145 76.0615 9.73843 77.2679 12.1955 77.7566C14.6526 78.2454 17.1995 77.9945 19.514 77.0358C21.8285 76.0771 23.8068 74.4536 25.1986 72.3706C26.5905 70.2875 27.3333 67.8386 27.3333 65.3333V52.6667M14.6667 52.6667H27.3333M14.6667 52.6667C11.3073 52.6667 8.08545 51.3321 5.70999 48.9567C3.33452 46.5812 2 43.3594 2 40C2 36.6406 3.33452 33.4188 5.70999 31.0433C8.08545 28.6679 11.3073 27.3333 14.6667 27.3333M27.3333 52.6667V27.3333M27.3333 2V27.3333M27.3333 2H14.6667C11.3073 2 8.08545 3.33452 5.70999 5.70998C3.33452 8.08544 2 11.3073 2 14.6667C2 18.0261 3.33452 21.2479 5.70999 23.6234C8.08545 25.9988 11.3073 27.3333 14.6667 27.3333M27.3333 27.3333H14.6667" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      }
    </svg>
  )
}
export const IconsTechFirebase = ({isActive, isPrimary}) => {
  return (
    <svg className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14`}  width="73" height="101" viewBox="0 0 73 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isActive ? 
      <>
        <path d="M0.0400391 80.6827L12.3486 1.92178C12.4224 1.45109 12.6421 1.01545 12.9768 0.676392C13.3115 0.337338 13.7443 0.112007 14.214 0.0322256C14.6837 -0.0475555 15.1666 0.0222455 15.5945 0.23177C16.0224 0.441294 16.3736 0.779951 16.5986 1.19991L29.3283 24.9421L34.4018 15.2812C34.5947 14.9147 34.884 14.6079 35.2385 14.3939C35.5931 14.1799 35.9993 14.0667 36.4135 14.0667C36.8276 14.0667 37.2339 14.1799 37.5884 14.3939C37.9429 14.6079 38.2323 14.9147 38.4252 15.2812L72.7768 80.6827H0.0400391Z" fill="#FFA000"/>
        <path d="M42.5627 50.0022L29.3221 24.9303L0.0400391 80.6827L42.5627 50.0022Z" fill="#F57C00"/>
        <path d="M72.7768 80.6827L63.3494 22.3451C63.2797 21.9339 63.0983 21.5498 62.8249 21.2348C62.5515 20.9198 62.1967 20.686 61.7994 20.5592C61.4022 20.4326 60.9779 20.4177 60.5728 20.5161C60.1677 20.6145 59.7975 20.8224 59.5025 21.117L0.0400391 80.6827L32.9424 99.1334C33.9585 99.7006 35.1029 99.9984 36.2666 99.9984C37.4303 99.9984 38.5747 99.7006 39.5908 99.1334L72.7768 80.6827Z" fill="#FFCA28"/>
      </>
      :
      <path className={`${isPrimary === 0 ? "stroke-primary" : 'stroke-secondary'}`} d="M2 79.5L61 22L70.5 79.5L36.5 98.5L2 79.5ZM2 79.5L36.5 16L46.5 35.5M2 79.5L14.0465 2.06982L28 28.0001" strokeWidth="4" strokeLinejoin="round"/>
      }
    </svg>
  )
}
export const IconsTechThreejs = ({isActive, isPrimary}) => {
  return (
    <svg  className={`h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14 ${isActive ? 'stroke-[#151515]': isPrimary === 0 ? 'stroke-primary': 'stroke-secondary'}`} width="93" height="87" viewBox="0 0 93 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45.4998 66.5L18.4998 58.5L57.9998 17L68.0002 46L38.5002 37.5M45.5002 67L38.5002 37.5M38.5002 37.5L31.5002 9.50005L11.0002 30.5L38.5002 37.5ZM25.5 85L2.5 2L91 25L25.5 85Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}