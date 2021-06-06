import React from 'react';

import { SvgXml } from 'react-native-svg';

function DoctorWithCrossedArms(): JSX.Element {
  const svgMarkup = `<svg width="168" height="345" viewBox="0 0 168 345" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.5783 123.848C17.4189 120.328 19.3139 116.716 20.3554 112.745C20.8304 110.924 21.1124 109.017 21.1124 107.109C21.1124 104.851 20.7166 102.59 19.7715 100.492C18.5643 97.8124 17.3718 95.3039 16.4515 92.7483C15.5313 90.1928 14.8782 87.5902 14.7223 84.6933C14.705 84.3791 14.6976 84.0624 14.6976 83.7482C14.6976 80.8661 15.3903 77.9766 16.6099 75.3072C17.8295 72.6404 19.5786 70.1986 21.6641 68.217C23.3513 66.6114 25.3131 65.2186 27.2576 63.7343C29.2021 62.2475 31.1293 60.6666 32.7076 58.6479C34.0015 56.9978 34.8599 55.1918 35.3869 53.3216C35.9163 51.4513 36.1216 49.5142 36.1216 47.5697C36.1216 46.0161 35.9905 44.4575 35.7877 42.9212C35.5007 40.7269 35.3349 38.5028 35.3349 36.2887C35.3349 31.0959 36.2379 25.9725 38.5337 21.4304C41.49 15.5771 46.0791 11.2625 51.544 8.31364C57.0089 5.36969 63.3446 3.80617 69.7322 3.50188C70.4719 3.46725 71.2116 3.44994 71.9513 3.44994C79.3681 3.44994 86.7206 5.18663 93.8652 7.77928C101.01 10.3719 107.939 13.8206 114.51 17.2123C118.587 19.3176 122.199 21.1953 125.324 23.548C128.448 25.9007 131.103 28.716 133.329 32.7708C136.172 37.9511 137.676 43.8737 137.676 49.7839C137.676 51.6022 137.532 53.4181 137.245 55.2117C136.981 56.8568 136.602 58.5836 136.285 60.3351C135.969 62.0866 135.714 63.8629 135.714 65.6194C135.714 66.7153 135.813 67.8039 136.065 68.8701C136.318 69.9364 136.726 70.9804 137.332 71.9675C137.864 72.8408 138.512 73.5953 139.224 74.2657C140.296 75.2701 141.51 76.0865 142.74 76.8386C143.974 77.5907 145.224 78.2784 146.377 79.0082C150.792 81.7988 154.35 85.814 156.804 90.4426C159.256 95.0713 160.599 100.309 160.599 105.519C160.599 108.225 160.238 110.922 159.486 113.527C159.112 114.818 158.645 116.112 158.202 117.438C157.757 118.762 157.336 120.12 157.066 121.542C156.854 122.67 156.752 123.813 156.752 124.956C156.752 127.92 157.445 130.876 158.734 133.538C159.152 134.402 159.684 135.161 160.23 135.861C161.052 136.91 161.905 137.84 162.521 138.766C162.828 139.228 163.078 139.688 163.249 140.156C163.419 140.626 163.516 141.106 163.516 141.635C163.516 141.994 163.471 142.38 163.367 142.801L165.05 143.214C165.183 142.667 165.248 142.14 165.248 141.635C165.25 140.641 164.998 139.743 164.617 138.946C164.04 137.746 163.194 136.749 162.385 135.77C161.574 134.792 160.799 133.835 160.292 132.784C159.117 130.354 158.481 127.65 158.484 124.956C158.484 123.92 158.578 122.883 158.768 121.864C159.013 120.57 159.407 119.286 159.842 117.987C160.277 116.688 160.755 115.372 161.148 114.007C161.947 111.238 162.331 108.379 162.331 105.519C162.331 100.012 160.916 94.5073 158.333 89.6312C155.75 84.7576 151.997 80.5123 147.302 77.5436C145.684 76.5244 143.987 75.6313 142.485 74.622C141.733 74.1198 141.033 73.5879 140.412 73.004C139.788 72.4177 139.249 71.7819 138.809 71.0645C138.304 70.2431 137.968 69.3798 137.752 68.4718C137.537 67.5639 137.446 66.609 137.446 65.6194C137.446 64.0311 137.681 62.3514 137.99 60.6419C138.297 58.9349 138.68 57.1982 138.955 55.4862C139.257 53.5986 139.408 51.6913 139.408 49.7839C139.405 43.5793 137.832 37.3797 134.846 31.9371C132.505 27.6671 129.648 24.6316 126.363 22.1626C123.08 19.6937 119.381 17.7788 115.304 15.6735C108.719 12.2744 101.725 8.79115 94.4565 6.15149C87.1882 3.5143 79.6403 1.7182 71.9513 1.7182C71.1869 1.7182 70.4175 1.73555 69.6506 1.77266C63.0378 2.08931 56.4547 3.70229 50.7227 6.78972C44.9931 9.87717 40.117 14.4514 36.9875 20.6511C34.5383 25.5 33.6032 30.9005 33.6032 36.2887C33.6032 38.5894 33.7739 40.8877 34.0708 43.1464C34.2662 44.6282 34.3899 46.1126 34.3899 47.5697C34.3899 49.393 34.1969 51.1693 33.722 52.8515C33.2445 54.5313 32.4875 56.1171 31.3445 57.5817C29.922 59.4049 28.1185 60.8992 26.2062 62.3588C24.2963 63.8209 22.2826 65.2434 20.4717 66.9603C18.2204 69.1002 16.3501 71.7176 15.0365 74.5873C13.7228 77.4595 12.9658 80.5866 12.9658 83.7482C12.9658 84.0946 12.9757 84.4409 12.993 84.7873C13.1588 87.8896 13.8638 90.6727 14.8237 93.3347C15.7836 95.9991 16.9958 98.5447 18.1932 101.204C19.0195 103.037 19.3807 105.051 19.3807 107.109C19.3807 108.846 19.1234 110.61 18.6781 112.307C17.7083 116.023 15.8875 119.526 14.0444 123.046L15.5783 123.848Z" fill="#531801"/>
  <path d="M102.212 159.974C109.871 164.306 117.884 168.101 126.36 170.54C133.049 172.465 140.117 173.531 146.983 172.379C153.845 171.226 160.5 167.634 164.28 161.79C170.594 152.028 167.402 138.619 160.587 129.199C158.172 125.859 155.253 122.621 154.513 118.568C153.702 114.145 155.656 109.749 156.495 105.331C157.932 97.7603 155.913 89.6039 151.112 83.5799C146.166 77.3753 138.408 73.2241 135.526 65.8295C132.77 58.7616 135.301 50.798 134.591 43.2452C133.861 35.4722 129.371 28.2508 123.931 22.8577C117.056 16.042 107.924 13.4048 100.691 7.46498C95.8592 3.49434 90.2384 1.12682 84.0264 0.352478C65.576 -1.94826 43.5532 7.04193 38.7167 26.4646C36.6164 34.8957 39.308 44.6108 35.7035 52.6139C33.2518 58.0565 28.1605 61.7723 24.4967 66.4876C19.2074 73.3008 17.0156 82.4295 18.6384 90.9027C19.6082 95.9593 21.8669 100.954 21.1049 106.048C20.0832 112.888 13.9751 117.777 11.3058 124.157C7.66169 132.87 11.2439 143.471 18.2525 149.799C25.2611 156.13 35.0059 158.695 44.4488 158.896C49.738 159.007 55.0421 158.445 60.1903 157.223C67.7753 155.425 75.3306 152.107 83.2595 152.379C91.2305 152.652 95.4361 156.145 102.212 159.974Z" fill="#792200"/>
  <path d="M104.461 137.687C110.797 139.067 117.803 136.754 122.073 131.873C126.343 126.995 127.703 119.744 125.494 113.645C122.822 106.278 115.636 101.12 113.466 93.5894C111.069 85.2647 112.271 76.4971 105.861 69.7458C101.895 65.5699 96.6013 62.9054 91.2304 60.8274C85.0432 58.4301 78.5962 56.7033 72.0378 55.6816C69.2151 55.2413 66.0831 54.9963 63.7378 56.6291C61.7068 58.0417 60.7592 60.5354 60.0839 62.9178C58.9236 67.0121 58.2309 71.2376 58.0281 75.4902C57.7881 80.49 58.179 85.7124 56.1429 90.2842C53.2509 96.7857 46.037 100.61 43.3132 107.184C40.5276 113.903 43.4394 122.077 48.9884 126.784C54.5349 131.49 62.1545 133.145 69.4229 132.885C74.3707 132.709 79.4324 131.754 84.3678 132.541C91.181 133.63 97.7393 136.225 104.461 137.687Z" fill="#531801"/>
  <path d="M146.194 229.964C140.86 229.17 138.242 222.322 135.64 216.479C131.63 207.471 128.186 197.966 124.967 188.605C120.401 175.332 117.467 161.538 114.542 147.785C112.89 140.007 107.952 122.628 114.844 116.406C124.955 119.801 131.724 123.118 137.194 128.207C144.051 134.585 147.567 142.679 151.047 151.209C155.431 161.958 159.667 172.829 162.492 184.137C164.696 192.969 167.232 202.31 166.524 211.605C165.767 221.548 161.035 232.168 146.194 229.964Z" fill="#F4F5F7"/>
  <path d="M20.9565 229.964C25.4541 226.988 28.9102 222.322 31.5102 216.479C35.5205 207.471 38.9641 197.966 42.1852 188.605C46.7496 175.333 49.6836 161.538 52.6078 147.785C54.2604 140.008 59.4853 122.799 52.5929 116.58C42.4821 119.974 35.4289 123.118 29.9566 128.207C23.0989 134.585 19.5835 142.679 16.1052 151.209C11.7189 161.959 7.48361 172.829 4.66087 184.137C2.45414 192.969 -0.60362 209.255 0.103919 218.549C0.860937 228.492 5.10866 240.456 20.9565 229.964Z" fill="#F4F5F7"/>
  <g filter="url(#filter0_d)">
  <path d="M114.557 60.8324C121.855 57.5421 123.263 67.4031 121.687 72.1332C121.036 74.0876 120.101 75.9703 118.738 77.5165C116.902 79.5946 111.855 82.8923 109.297 80.265C108.137 79.0725 108.149 77.2023 108.241 75.5398C108.478 71.0843 109.611 63.0614 114.557 60.8324Z" fill="#E57E67"/>
  </g>
  <g filter="url(#filter1_d)">
  <path d="M52.9417 60.8324C45.6436 57.5421 44.2335 67.4031 45.8094 72.1332C46.46 74.0876 47.3976 75.9703 48.7607 77.5165C50.5964 79.5946 55.6432 82.8923 58.2012 80.265C59.3615 79.0725 59.3466 77.2023 59.2576 75.5398C59.0176 71.0843 57.887 63.0614 52.9417 60.8324Z" fill="#E57E67"/>
  </g>
  <path d="M152.383 261.071C147.297 210.116 142.277 180.312 136.75 144.574C135.647 137.437 133.495 129.773 130.486 126.119C125.806 120.434 119.022 117.965 112.355 115.471C104.171 112.413 95.6364 110.061 86.8738 109.606C85.9832 109.561 85.0975 109.539 84.2094 109.534V109.351L84.1228 109.531H84.0956H84.0684L83.9818 109.351V109.534H83.9447H83.9051V109.351L83.8185 109.531H83.7913H83.7641L83.6775 109.351V109.534C82.7894 109.539 81.9037 109.561 81.0156 109.606C72.2505 110.061 63.718 112.413 55.5318 115.471C48.8646 117.965 42.0811 120.434 37.4005 126.119C34.3922 129.773 32.2399 137.437 31.1365 144.574C25.6098 180.312 20.5902 210.116 15.5039 261.071C12.4313 291.871 8.71545 336.661 10.1949 338.784C13.0275 342.846 45.6411 343.791 50.0224 344.204C57.214 344.88 64.4478 344.929 71.6716 344.979C75.7536 345.006 79.8479 345.008 83.9447 344.979C88.039 345.008 92.1333 345.006 96.2153 344.979C103.439 344.929 110.673 344.88 117.865 344.204C122.248 343.791 154.859 342.846 157.692 338.784C159.171 336.661 155.456 291.871 152.383 261.071Z" fill="#F4F5F7"/>
  <path d="M94.8333 76.0294H72.0396V124.218C72.0396 128.267 74.6606 131.526 77.9168 131.526H88.9563C92.2125 131.526 94.8333 128.267 94.8333 124.218V76.0294Z" fill="#F89D7D"/>
  <path d="M94.8482 110.636C94.8482 110.636 100.878 111.16 113.462 115.879L81.8958 213.406L57.0957 114.831C64.1743 112.209 72.0394 110.636 72.0394 110.636C73.2516 117.817 77.4195 121.385 83.8371 121.385C90.9156 121.385 94.3239 115.879 94.8482 110.636Z" fill="#C4C4C4"/>
  <path d="M123.425 119.55C122.461 122.772 121.488 125.992 120.498 129.204C119.515 132.419 118.516 135.629 117.516 138.84C116.519 142.052 115.5 145.255 114.493 148.463L111.434 158.074L111.34 158.371L111.027 158.414L106.221 159.094L101.413 159.764L101.575 158.768C103.878 159.906 106.187 161.034 108.485 162.181L108.967 162.422L108.726 162.902C106.703 166.905 104.694 170.918 102.659 174.916C100.623 178.917 98.5951 182.917 96.5404 186.908C94.4978 190.902 92.431 194.886 90.3643 198.869C88.2904 202.848 86.214 206.827 84.0991 210.785C86.0093 206.724 87.958 202.682 89.9066 198.64C91.865 194.601 93.8257 190.564 95.8081 186.54C97.7761 182.508 99.773 178.49 101.763 174.468C103.752 170.445 105.768 166.437 107.77 162.42L108.011 163.14C105.706 162.008 103.41 160.856 101.107 159.713L99.5682 158.949L101.269 158.718L106.079 158.067L110.889 157.426L110.485 157.766L113.657 148.191C114.729 145.005 115.784 141.814 116.866 138.63C117.945 135.444 119.021 132.26 120.115 129.079C121.204 125.898 122.307 122.721 123.425 119.55Z" fill="#D1D7E8"/>
  <path d="M44.2495 119.55C45.3648 122.721 46.4704 125.898 47.5567 129.079C48.6503 132.26 49.7295 135.444 50.8062 138.63C51.8877 141.814 52.9452 145.005 54.0171 148.191L57.1894 157.766L56.7823 157.426L61.595 158.067L66.4029 158.718L68.1059 158.949L66.5667 159.713C64.264 160.856 61.9684 162.008 59.6608 163.14L59.9017 162.42C61.9034 166.437 63.9195 170.445 65.9091 174.468C67.8988 178.49 69.8956 182.508 71.866 186.54C73.8484 190.564 75.8067 194.601 77.7651 198.64C79.7162 202.682 81.6649 206.724 83.575 210.785C81.4601 206.827 79.3838 202.848 77.3074 198.869C75.2407 194.886 73.1764 190.902 71.1337 186.908C69.0791 182.917 67.0485 178.917 65.0155 174.916C62.9777 170.918 60.9712 166.905 58.9478 162.902L58.7069 162.422L59.1887 162.181C61.4866 161.034 63.7942 159.906 66.097 158.768L66.2608 159.764L61.4529 159.094L56.6474 158.414L56.3343 158.371L56.2403 158.074L53.1812 148.463C52.1743 145.255 51.153 142.052 50.1582 138.84C49.1586 135.629 48.1589 132.419 47.1737 129.204C46.1861 125.992 45.213 122.772 44.2495 119.55Z" fill="#D1D7E8"/>
  <path d="M59.3095 207.283C59.5173 199.683 61.2565 192.123 64.4082 185.203C64.7249 184.501 65.091 183.771 65.7392 183.358C66.5556 182.836 67.607 182.945 68.5669 183.078C76.4933 184.172 84.4073 185.347 92.3065 186.623C104.226 188.546 116.051 190.975 127.906 193.271C129.319 193.543 130.759 193.818 132.186 193.632C138.188 192.843 138.116 185.132 138.19 180.619C138.351 170.526 138.687 161.031 137.99 150.959C142.688 155.113 146.317 158.856 149.59 164.205C151.569 167.436 152.997 170.969 154.32 174.516C159.852 189.327 164.79 205.593 165.962 221.402C166.648 230.624 155.958 237.138 148.031 237.057C135.073 236.921 96.0595 227.725 83.6553 224.19C75.5433 221.879 68.8761 220.175 61.0957 216.916C60.6207 216.719 60.1185 216.493 59.8463 216.056C59.6237 215.697 59.594 215.256 59.5767 214.833C59.5198 213.522 59.2749 208.597 59.3095 207.283Z" fill="#D1D7E8"/>
  <path d="M107.793 214.697C107.449 207.102 105.574 199.574 102.299 192.712C101.967 192.017 101.591 191.294 100.936 190.891C100.109 190.386 99.0604 190.512 98.103 190.663C82.4778 193.108 39.2585 200.23 24.7985 206.637C15.9048 210.581 2.04837 219.4 1.41258 230.736C0.893054 239.968 11.7016 246.289 19.623 246.064C32.5765 245.693 71.4169 235.797 83.7568 232.042C91.8267 229.585 98.4592 227.76 106.18 224.363C106.653 224.155 107.153 223.92 107.415 223.48C107.633 223.116 107.655 222.673 107.665 222.25C107.697 220.939 107.853 216.009 107.793 214.697Z" fill="#D1D7E8"/>
  <g filter="url(#filter2_d)">
  <path d="M51.9819 54.3828C52.1105 48.1238 53.058 42.1988 54.7403 37.2906C61.9938 16.1163 88.6082 11.2403 104.369 26.7393C121.947 44.0246 115.982 84.3815 97.0071 98.416C91.9331 102.166 83.6529 103.678 77.5819 101.956C59.2107 96.7461 51.5861 73.9367 51.9819 54.3828Z" fill="#F89D7D"/>
  </g>
  <path d="M52.0115 32.1153C57.7238 10.4735 83.92 3.6974 100.755 18.0238C103.442 20.3097 105.305 23.036 107.219 25.9527C108.845 28.4242 111.106 30.2969 112.541 33.0158C114.013 35.8088 114.931 38.8963 115.235 42.0381C115.45 44.2572 116.187 48.3367 115.885 50.5286C115.514 53.2252 115 58.2151 114.673 60.9166C114.577 57.8464 113.256 50.7339 112.33 47.8024C111.212 44.2622 109.181 41.4197 106.381 39.015C105.042 37.8671 103.568 36.8973 102.175 35.8212C101.745 35.4872 99.7852 33.7505 98.7586 31.9817C92.0617 40.7616 80.7237 44.2498 70.4966 46.7831C61.9171 48.9082 52.672 58.9547 52.1253 60.6147C52.0164 58.5094 50.688 37.1324 52.0115 32.1153Z" fill="#E57E67"/>
  <path d="M52.1254 60.6147C51.5539 59.9864 50.4432 56.2656 50.1413 55.3552C49.268 52.7205 48.1671 50.4866 47.6823 47.7405C46.5665 41.3949 45.238 41.1475 45.238 34.6931C45.3667 26.3016 49.4189 21.3686 55.7497 16.2946C61.4991 11.6882 68.4508 8.57348 75.7315 7.42311C77.1886 7.19304 78.6557 7.04215 80.1276 6.97288C82.3344 6.86898 84.5807 6.94566 86.6934 7.59382C88.2742 8.07624 89.7413 8.86544 91.1984 9.65215C93.1553 10.706 95.1195 11.7673 96.9131 13.081C99.8422 15.2259 102.385 18.3776 105.641 19.9956C109.285 21.8089 112.976 22.7317 116.128 25.5099C118.8 27.8651 120.742 30.9723 122.132 34.2676C123.8 38.2184 121.966 41.0411 121.489 45.2567C121.096 48.7325 121.467 52.1119 119.94 55.3552C118.513 58.3907 114.673 60.9166 114.673 60.9166C114.673 60.9166 114.302 54.7219 114.191 53.9575C113.894 51.9684 113.553 48.8092 112.182 44.5714C110.856 40.4326 108.234 37.8968 104.822 35.3709C103.454 34.3591 102.098 33.3102 100.946 32.0435C99.6072 30.5716 99.0976 29.0179 98.2936 27.5608C96.7919 30.9104 94.2487 33.5427 91.0376 35.4526C85.5109 38.7355 79.2197 40.3014 73.1537 42.2558C67.3696 44.1187 60.0667 46.4194 56.7541 51.9387C53.5009 57.3516 52.1254 60.6147 52.1254 60.6147Z" fill="#792200"/>
  <path d="M88.549 11.2897C88.8607 12.8409 88.9324 14.4415 88.7815 16.0199C88.6281 17.6032 88.2397 19.1593 87.6905 20.6511C87.1388 22.1453 86.409 23.5727 85.5456 24.9111C84.6822 26.252 83.6803 27.5063 82.5645 28.6492C82.0079 29.2232 81.4191 29.7649 80.8056 30.277C80.1772 30.7693 79.5662 31.2864 78.9032 31.7317L78.4158 32.078L78.1709 32.2512L77.921 32.412L76.9117 33.0577C76.5752 33.2705 76.2264 33.461 75.8825 33.6638L75.3655 33.9656L74.841 34.2477C72.0405 35.7691 69.104 36.9888 66.1947 38.2208C64.74 38.8343 63.2903 39.4528 61.8554 40.0985L60.7867 40.5957L60.2548 40.8431L59.7279 41.1054C59.3766 41.281 59.0228 41.4492 58.674 41.6298L57.6399 42.184C57.2886 42.3596 56.967 42.5724 56.633 42.7703L56.1332 43.0696C55.9675 43.1711 55.7993 43.2676 55.6434 43.3838C55.0076 43.8316 54.3545 44.2522 53.7534 44.7494C53.4491 44.9919 53.1349 45.2219 52.838 45.4743L51.9573 46.2412C51.8113 46.3698 51.6604 46.496 51.5169 46.6271L51.0939 47.0329L50.2478 47.8418C48.0436 50.056 46.0372 52.4779 44.1645 54.9964C42.2966 57.5247 40.56 60.152 38.8604 62.809L38.2246 63.806L37.9055 64.3057L37.6061 64.8055L37.0099 65.8049L36.4706 66.8365C36.3815 67.0097 36.285 67.1779 36.2059 67.3561L35.9634 67.8855C35.8051 68.2393 35.6319 68.5881 35.486 68.9493C35.2064 69.6716 34.9021 70.3891 34.6745 71.1313C33.6652 74.0752 33.1456 77.1725 32.9997 80.2773C32.9057 83.3845 33.1976 86.5141 34.009 89.5199C34.1946 90.2769 34.4247 91.0215 34.6696 91.7662C34.9145 92.5108 35.1792 93.253 35.439 93.9976C35.961 95.4869 36.4929 96.9886 36.9208 98.5323C37.3488 100.071 37.668 101.667 37.7174 103.295C37.7719 104.917 37.5072 106.575 36.8837 108.084C36.5745 108.839 36.1861 109.554 35.7556 110.239C35.3103 110.912 34.8353 111.562 34.3208 112.173C33.299 113.403 32.1858 114.534 31.122 115.691C30.5851 116.268 30.0656 116.857 29.5733 117.465L29.2096 117.923L28.8559 118.395C28.6184 118.71 28.3908 119.031 28.1582 119.35C27.2404 120.629 26.377 121.95 25.5458 123.291C24.7146 124.632 23.9155 125.995 23.1337 127.368C22.347 128.739 21.5727 130.117 20.7983 131.495C21.5257 130.09 22.2481 128.684 22.9878 127.287C23.7324 125.891 24.4968 124.508 25.2959 123.14C26.095 121.775 26.9262 120.426 27.8168 119.113C28.0395 118.784 28.2621 118.457 28.4922 118.133L28.8361 117.648L29.1973 117.168C29.6822 116.535 30.1943 115.924 30.7187 115.33C31.7652 114.138 32.8562 112.995 33.8284 111.773C34.3208 111.167 34.7661 110.528 35.1817 109.878C35.58 109.215 35.9337 108.532 36.2108 107.817C36.7625 106.389 36.9926 104.856 36.9208 103.322C36.854 101.788 36.53 100.262 36.0921 98.7673C35.2237 95.769 33.9002 92.8794 33.0739 89.7722C32.213 86.6749 31.8839 83.4489 31.9557 80.2402C32.0819 77.034 32.6212 73.8352 33.6503 70.7898C33.8853 70.0229 34.1946 69.2808 34.484 68.5312C34.6349 68.1576 34.8131 67.7964 34.9739 67.4303L35.2237 66.8811C35.3054 66.698 35.4068 66.5224 35.4959 66.3442L36.055 65.273L36.6685 64.234L36.9753 63.7169L37.2944 63.2147L37.9302 62.2153C39.6446 59.5509 41.4036 56.9087 43.2986 54.3556C45.206 51.8125 47.2395 49.346 49.5155 47.0997L50.3888 46.2783L50.8267 45.8677C50.9751 45.7316 51.1285 45.6054 51.2794 45.4743L52.1923 44.6925C52.5015 44.4377 52.8256 44.2002 53.1423 43.9528C53.7632 43.4482 54.4436 43.0152 55.1041 42.56C55.2674 42.4413 55.443 42.3423 55.6162 42.2409L56.1357 41.9316C56.4821 41.7312 56.8235 41.5111 57.1797 41.3354L58.241 40.7788C58.5948 40.5982 58.956 40.43 59.3122 40.2543L59.8516 39.9946L60.3933 39.7472C60.7545 39.5839 61.1157 39.4157 61.4794 39.2573C62.9365 38.6216 64.4035 38.0229 65.8681 37.4267C68.7947 36.2392 71.7164 35.0542 74.5045 33.6119L75.0265 33.3422L75.5411 33.0552C75.88 32.8623 76.2289 32.6817 76.5628 32.4788L77.5648 31.8628L77.8146 31.7094L78.0571 31.5462L78.542 31.2147C79.2 30.7892 79.8061 30.2944 80.432 29.8243C81.0431 29.337 81.6245 28.815 82.1836 28.2707C83.3042 27.1797 84.3186 25.9774 85.1993 24.6835C86.0825 23.3897 86.837 22.0043 87.4184 20.5471C87.9997 19.09 88.4203 17.5636 88.6157 16.0026C88.8211 14.444 88.8062 12.8508 88.549 11.2897Z" fill="#531801"/>
  <path d="M138.965 173.87L138.312 157.451C138.312 157.451 137.048 166.382 134.982 168.161C132.919 169.939 118.565 172.854 118.565 172.854L138.965 173.87Z" fill="#D1D7E8"/>
  <path d="M60.6061 182.687C58.3919 180.894 56.1481 179.137 53.9067 177.378C51.8979 175.805 49.8718 174.219 47.5834 173.089C43.4668 171.055 38.7738 170.62 34.202 170.214C30.7385 169.91 27.1736 169.613 23.8487 170.625C23.4429 170.748 22.9902 170.941 22.8616 171.345C22.7008 171.844 23.1288 172.334 23.5642 172.624C24.6774 173.361 26.0381 173.598 27.3542 173.811C29.8232 174.212 32.2921 174.588 34.7685 174.942C28.9969 174.353 22.9333 173.806 17.602 176.092C17.1518 176.285 16.6644 176.547 16.5185 177.015C16.0657 178.462 18.1661 178.87 19.1557 178.989C21.8102 179.306 24.5562 179.278 27.0524 180.236C25.0238 180.367 23.0051 180.627 21.0086 181.013C19.6109 181.282 18.1859 181.631 17.0133 182.438C16.7832 182.593 16.5556 182.779 16.4418 183.034C16.1993 183.581 16.5803 184.221 17.0652 184.573C17.9039 185.179 18.9949 185.268 20.0265 185.337C22.6538 185.51 25.2712 185.703 27.896 185.899C26.5255 186.057 25.1623 186.307 23.8239 186.648C22.7181 186.928 21.5628 187.311 20.8231 188.182C20.7118 188.313 20.6103 188.457 20.5806 188.625C20.5312 188.894 20.6796 189.162 20.8577 189.374C21.5207 190.164 22.5919 190.495 23.6211 190.559C24.6502 190.621 25.6794 190.458 26.711 190.446C30.4713 190.404 33.534 190.099 37.1187 191.789C39.7733 193.043 42.1952 194.743 44.8374 196.024C47.0589 197.1 49.4141 197.872 51.7619 198.639C57.6893 200.576 63.6193 202.513 69.5493 204.453C70.9099 204.898 72.3176 205.348 73.745 205.212C75.64 205.032 77.6934 203.134 77.9012 201.195C78.1288 199.052 76.1818 197.182 74.8682 195.747C72.7604 193.446 70.5265 191.265 68.2183 189.169C65.7518 186.928 63.1988 184.783 60.6061 182.687Z" fill="#D1D7E8"/>
  <path d="M60.0246 177.148C57.5903 175.666 55.1337 174.222 52.6771 172.779C50.4778 171.486 48.2562 170.184 45.8367 169.368C41.4876 167.903 36.7773 168.094 32.1931 168.304C28.7197 168.46 25.1474 168.641 21.9857 170.088C21.5998 170.266 21.1792 170.516 21.1025 170.934C21.011 171.448 21.5008 171.879 21.9709 172.109C23.1732 172.69 24.5512 172.745 25.8871 172.779C28.3857 172.849 30.8844 172.891 33.383 172.913C27.5867 173.099 21.5033 173.363 16.5233 176.339C16.1027 176.589 15.655 176.913 15.5733 177.398C15.316 178.892 17.4535 179.016 18.4505 179.001C21.1223 178.962 23.8411 178.568 26.4437 179.187C24.4497 179.588 22.483 180.112 20.5558 180.763C19.205 181.215 17.8419 181.75 16.7855 182.705C16.5777 182.893 16.3774 183.106 16.2982 183.373C16.1324 183.947 16.5951 184.53 17.122 184.815C18.0324 185.305 19.1259 185.248 20.1575 185.179C22.7873 185.001 25.4047 184.842 28.032 184.686C26.6936 185.025 25.3774 185.456 24.096 185.971C23.0371 186.398 21.9436 186.93 21.3252 187.893C21.2336 188.036 21.152 188.192 21.1446 188.363C21.1322 188.637 21.3153 188.882 21.5182 189.068C22.2801 189.763 23.3884 189.948 24.4176 189.874C25.4442 189.8 26.4437 189.501 27.463 189.352C31.1837 188.81 34.1796 188.098 37.9573 189.298C40.7553 190.186 43.3826 191.549 46.1707 192.467C48.516 193.239 50.9528 193.686 53.3822 194.134C59.515 195.265 65.6503 196.398 71.7856 197.528C73.1932 197.788 74.6504 198.045 76.0432 197.721C77.9011 197.291 79.6823 195.136 79.6279 193.187C79.5685 191.034 77.3915 189.439 75.8972 188.192C73.5025 186.193 70.9989 184.328 68.431 182.556C65.6874 180.664 62.8721 178.88 60.0246 177.148Z" fill="#F89D7D"/>
  <path d="M59.3095 200.754C59.5173 193.152 61.2565 185.594 64.4082 178.672C64.7249 177.972 65.091 177.242 65.7392 176.829C66.5556 176.307 67.607 176.416 68.5669 176.547C76.4933 177.643 84.4073 178.818 92.3065 180.092C104.226 182.017 116.051 184.446 127.906 186.74C129.319 187.014 130.759 187.289 132.186 187.101C138.188 186.314 138.116 178.603 138.19 174.091C138.351 163.997 137.653 153.911 136.958 143.84C141.654 147.993 146.317 152.328 149.59 157.674C151.569 160.905 152.997 164.437 154.32 167.987C159.852 182.796 164.79 199.062 165.962 214.873C166.648 224.096 155.958 230.61 148.031 230.526C135.073 230.389 96.0595 221.194 83.6553 217.661C75.5433 215.351 68.8761 213.646 61.0957 210.388C60.6207 210.19 60.1185 209.965 59.8463 209.527C59.6237 209.168 59.594 208.725 59.5767 208.305C59.5198 206.994 59.2749 202.066 59.3095 200.754Z" fill="#F4F5F7"/>
  <path d="M104.711 182.21C107.128 180.703 109.572 179.234 112.011 177.767C119.735 173.123 129.408 172.784 138.212 173.4C138.262 174.677 138.249 175.948 138.301 177.227C138.442 180.822 138.556 184.573 137.059 187.843C136.661 188.711 136.147 189.543 135.441 190.186C134.751 190.817 133.908 191.25 133.054 191.626C130.583 192.722 128.245 193.268 125.595 193.34C122.933 193.414 119.93 194.144 117.558 195.344C114.502 196.888 111.274 198.152 108.117 199.47C103.538 201.383 98.0285 201.759 93.1573 202.709C91.7522 202.983 90.2975 203.256 88.8997 202.946C87.0393 202.533 85.2359 200.398 85.2705 198.449C85.3076 196.294 87.4673 194.676 88.9492 193.414C91.3242 191.391 93.808 189.501 96.3561 187.705C99.0824 185.785 101.88 183.971 104.711 182.21Z" fill="#D1D7E8"/>
  <path d="M110.302 210.024C109.955 202.429 108.083 194.901 104.807 188.038C104.476 187.343 104.097 186.621 103.442 186.218C102.615 185.713 101.566 185.839 100.609 185.989C84.9837 188.434 41.7669 195.557 27.3069 201.964C18.4107 205.905 4.55431 214.727 3.91852 226.063C3.40147 235.295 14.2075 241.616 22.129 241.391C35.0849 241.02 73.9253 231.124 86.2627 227.366C94.3326 224.91 100.968 223.086 108.689 219.687C109.159 219.482 109.659 219.247 109.923 218.807C110.138 218.443 110.161 218 110.171 217.577C110.203 216.266 110.361 211.335 110.302 210.024Z" fill="#D1D7E8"/>
  <path d="M104.711 179.437C107.128 177.93 109.572 176.463 112.011 174.994C119.735 170.35 129.408 170.014 138.212 170.627C138.262 171.906 138.249 173.175 138.301 174.454C138.442 178.049 138.556 181.799 137.059 185.07C136.661 185.94 136.147 186.769 135.441 187.415C134.751 188.043 133.908 188.476 133.054 188.852C130.583 189.948 128.245 190.495 125.595 190.569C122.933 190.641 119.93 191.371 117.558 192.571C114.502 194.114 111.274 195.379 108.117 196.697C103.538 198.61 98.0285 198.986 93.1573 199.936C91.7522 200.21 90.2975 200.482 88.8997 200.173C87.0393 199.76 85.2359 197.625 85.2705 195.675C85.3076 193.521 87.4673 191.905 88.9492 190.641C91.3242 188.617 93.808 186.73 96.3561 184.931C99.0824 183.012 101.88 181.198 104.711 179.437Z" fill="#F89D7D"/>
  <path d="M139.926 302.039L139.926 302.039C143.34 301.602 145.608 298.884 147.076 294.922C148.542 290.965 149.18 285.84 149.374 280.75C149.567 275.663 149.317 270.631 149.018 266.868C148.869 264.988 148.708 263.425 148.583 262.333C148.521 261.787 148.469 261.359 148.432 261.068C148.418 260.964 148.407 260.878 148.398 260.81L122.553 256.186C122.558 256.246 122.563 256.313 122.569 256.388C122.598 256.74 122.642 257.257 122.703 257.914C122.825 259.228 123.015 261.103 123.288 263.348C123.833 267.838 124.708 273.804 126.027 279.71C127.347 285.621 129.108 291.453 131.416 295.688C133.735 299.942 136.542 302.472 139.926 302.039Z" stroke="#D1D7E8" stroke-width="0.52434"/>
  <path d="M27.5728 302.039L27.5729 302.039C30.9569 302.472 33.7631 299.942 36.0821 295.688C38.3904 291.453 40.1504 285.621 41.4701 279.71C42.7887 273.804 43.6636 267.838 44.2089 263.348C44.4815 261.103 44.6716 259.228 44.7935 257.914C44.8545 257.257 44.8984 256.741 44.927 256.388C44.9331 256.313 44.9386 256.246 44.9433 256.186L19.1004 260.81C19.0914 260.878 19.0802 260.964 19.0671 261.068C19.0299 261.359 18.9772 261.787 18.9152 262.333C18.7911 263.425 18.6296 264.988 18.4802 266.868C18.1813 270.631 17.9312 275.663 18.1248 280.75C18.3187 285.84 18.9565 290.965 20.4227 294.922C21.8909 298.884 24.1584 301.602 27.5728 302.039Z" stroke="#D1D7E8" stroke-width="0.52434"/>
  <path d="M107.793 207.184C107.449 199.589 105.574 192.064 102.299 185.198C101.967 184.503 101.591 183.781 100.936 183.378C100.109 182.873 99.0604 182.999 98.103 183.15C82.4778 185.594 39.2585 192.719 24.7985 199.127C15.9048 203.067 2.04837 211.887 1.41258 223.222C0.893054 232.458 11.7016 238.776 19.623 238.551C32.5765 238.182 71.4169 228.284 83.7568 224.529C91.8267 222.072 98.4592 220.246 106.18 216.85C106.653 216.642 107.153 216.407 107.415 215.966C107.633 215.603 107.655 215.16 107.665 214.739C107.697 213.426 107.853 208.495 107.793 207.184Z" fill="#F4F5F7"/>
  <path d="M100.936 183.378C100.523 183.143 100.045 183.059 99.5801 183.061C99.11 183.061 98.6474 183.138 98.1823 183.222L95.3942 183.731L89.8205 184.751L78.673 186.804C74.9622 187.507 71.2488 188.192 67.5429 188.922C63.8345 189.639 60.1311 190.369 56.435 191.141C52.7365 191.898 49.0479 192.694 45.3717 193.538C41.6905 194.369 38.0316 195.282 34.395 196.274C33.4846 196.514 32.584 196.789 31.6786 197.048L30.3303 197.467L29.6574 197.677L28.987 197.897C28.5417 198.05 28.0914 198.186 27.6511 198.35L26.3275 198.83L25.0213 199.352C24.5859 199.532 24.1579 199.723 23.7274 199.913C20.2912 201.45 16.9786 203.275 13.8318 205.368C16.8376 203.072 20.0982 201.108 23.4974 199.423C23.9229 199.213 24.3509 199.008 24.7838 198.812L26.0925 198.241L27.416 197.714C27.8564 197.533 28.3042 197.382 28.7495 197.214L29.4174 196.969L30.0928 196.742L31.4411 196.289C32.3465 196.007 33.2471 195.71 34.155 195.445C35.9684 194.891 37.7966 194.392 39.6273 193.907C40.5402 193.664 41.4604 193.437 42.3758 193.199L45.1317 192.521C48.8129 191.643 52.5114 190.836 56.2124 190.062C59.9183 189.308 63.6317 188.58 67.3499 187.897C71.0707 187.225 74.794 186.564 78.5246 185.96C82.2553 185.344 85.9934 184.77 89.7314 184.219C91.6042 183.952 93.4745 183.682 95.3472 183.43L98.1576 183.056C98.6276 182.999 99.1051 182.95 99.5826 182.977C100.058 183.004 100.537 183.118 100.936 183.378Z" fill="#D1D7E8"/>
  <path d="M39.3723 38.723C40.1095 36.6523 41.2797 34.7325 42.6997 33.0305C44.1321 31.3309 45.8045 29.8441 47.603 28.5477C49.3966 27.2366 51.3213 26.1258 53.2807 25.1041C55.2474 24.0947 57.2686 23.2041 59.2972 22.353C61.3308 21.5243 63.3594 20.7054 65.3633 19.842C67.3746 18.991 69.3463 18.0658 71.266 17.049C71.7435 16.7917 72.2111 16.5171 72.686 16.2524C73.1536 15.9778 73.6088 15.6834 74.0764 15.4063C74.5341 15.1144 74.9769 14.8027 75.4296 14.5009C75.8724 14.1867 76.298 13.8502 76.7358 13.5286C78.4503 12.1927 80.0064 10.6465 81.3373 8.89993C80.2092 10.7851 78.7323 12.4673 77.0847 13.9443C76.6616 14.298 76.2411 14.6617 75.8106 15.008C75.3678 15.3395 74.9299 15.6834 74.4796 16.005C74.0244 16.3167 73.5692 16.6334 73.1017 16.9327C72.6316 17.2222 72.164 17.519 71.6866 17.7986C71.2066 18.0707 70.7267 18.3503 70.2418 18.615C69.752 18.8723 69.2646 19.1296 68.7723 19.3794L67.283 20.1043L65.7838 20.7995C63.775 21.7 61.739 22.5287 59.7178 23.3723C57.6966 24.1986 55.7001 25.0744 53.7507 26.0367C51.7938 26.9892 49.9013 28.0554 48.0953 29.2503C46.2968 30.4576 44.5948 31.8133 43.103 33.3892C41.6038 34.9552 40.3347 36.7488 39.3723 38.723Z" fill="#531801"/>
  <defs>
  <filter id="filter0_d" x="106.106" y="60.1735" width="18.2568" height="25.2596" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="2.09736"/>
  <feGaussianBlur stdDeviation="1.04868"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter1_d" x="43.1334" y="60.1735" width="18.2579" height="25.2596" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="2.09736"/>
  <feGaussianBlur stdDeviation="1.04868"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter2_d" x="49.8699" y="17.6587" width="67.0706" height="89.1999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="2.09736"/>
  <feGaussianBlur stdDeviation="1.04868"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
  `;

  return <SvgXml xml={svgMarkup} />;
}

export default DoctorWithCrossedArms;
