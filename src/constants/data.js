import Team1 from "../assets/images/team1.png";
import Team2 from "../assets/images/team2.png";
import Team3 from "../assets/images/team3.png";
import Team4 from "../assets/images/team4.png";

import News1 from "../assets/images/news/news1.jpeg";
import News2 from "../assets/images/news/news2.jpeg";
import News3 from "../assets/images/news/news3.png";
import News4 from "../assets/images/news/news4.png";

import Event1 from "../assets/images/events/event1.png";
import Event2 from "../assets/images/events/event2.png";

export const teamList = [
  { name: "Jacob", position: "CEO", img: Team1 },
  { name: "Elizabeth ", position: "Co-founder", img: Team2 },
  { name: "Tiffany", position: "Event manager", img: Team3 },
  { name: "Husan", position: "Brand Manager", img: Team4 },
];

export const newsList = [
  {
    title:
      "Toronto's homeless community shares stories of struggles experienced during COVID-19 pandemic",
    description:
      "Toronto’s most vulnerable residents along with those who support and advocate for them say they had no choice but to band together during the pandemic to ensure people. ",
    content:
      "<p>Toronto’s most vulnerable residents along with those who support and advocate for them say they had no choice but to band together during the pandemic to ensure people experiencing homelessness and those at risk of becoming unhoused were taken care of and they’re now sharing some of those stories.</p> <p>Dredz, who has stayed at a number of encampments in downtown Toronto parks, said over the last two and a half years he and many others experiencing homelessness have been repeatedly let down by the system meant to take care of and protect them.</p><p>He said unhoused people in Toronto supported each another during the pandemic by setting up tented communities in local green spaces, making sure their friends were fed and had access to health care and other supports, and offering comfort during the hardest times. Many times these efforts to build community were met with police violence and intimidation, he noted.</p><p>And while losses and hardships happened frequently, in the end, Dredz said they somehow got by, especially those who were able to ask the right questions so they could get the assistance they needed.</p><br/><b>Source</b>: https://www.cp24.com/news/toronto-s-homeless-community-shares-stories-of-struggles-experienced-during-covid-19-pandemic-1.6147636?cache=%3FclipId%3D68597",
    img: News1,
    route:
      "news/toronto-s-homeless-community-shares-stories-of-struggles-experienced-during-covid-19/",
  },
  {
    title:
      "Deaths among people experiencing homelessness in Toronto nearly doubled in 3 years: data",
    description:
      "A Toronto homeless advocate is sounding the alarm after a steep increase in deaths happening in the city’s shelter system and the streets. ",
    content:
      "<p>A Toronto homeless advocate is sounding the alarm after a steep increase in deaths happening in the city’s shelter system and the streets.</p><p>According to Toronto Public Health (TPH), the number of deaths among unhoused people has nearly doubled in the last three years.</p><p>A man who’s an advocate for those experiencing homelessness says the shelter he’s staying at is on track to hit 200 deaths this year.</p><p>Gru tells CityNews he’s been living in a downtown Toronto shelter for the last 17 months but has been unhoused for nearly a decade. He says he spends much of his time advocating for himself and on behalf of the almost 10,000 people in Toronto experiencing homelessness.</p><br/> <b>Source</b>:  https://toronto.citynews.ca/2022/09/06/toronto-homeless-shelters-covid19-encampments/  ",
    img: News2,
    route: "news/toronto-homeless-shelters-covid19-encampments/",
  },
  {
    title: "Turning To Us Turning To You",
    description:
      "You often hear staff say that food is a gateway at Haven Toronto. This has been the case since the day we opened almost 90 years ago. ",
    content:
      "<p>You often hear staff say that food is a gateway at Haven Toronto. This has been the case since the day we opened almost 90 years ago. Clients come for a nutritious, hot meal prepared in-house and while they are here they access health and housing supports and socialize with peers.</p><p>As poverty and homelessness grow in the province, we are seeing more and more new faces of elder men. In August, new clients increased by 152% compared to the same time period pre-pandemic. We saw the spike start in June with a 163% increase. We expect these numbers to continue into and throughout 2023.</p><p>Recently a man that we had never seen before showed up for lunch. With him was everything he owned – literally pants, and the shirt on his back. He had no socks, no shoes, no nothing else. It turns out he is homeless and everything that belonged to him was stolen.His situation is not uncommon. Exposed and vulnerable men living on Toronto streets face the constant threat of theft, violence and even death.</p><p>Within seconds of his arrival, Haven Toronto Crisis Counsellors and Support Care Workers spoke with the man, outfitted him with items from our Emergency Clothing room, and got him in front of nursing and housing staff. We have been providing this level of support for so long now that the process comes naturally; we’re used to it.</p><br/><b>Source : </b>https://www.haventoronto.ca/single-post/turning-to-us-turning-to-you  ",
    img: News3,
    route: "news/turning-to-us-turning-to-you/",
  },
  {
    title: "Toronto set to close 3rd emergency homeless shelter",
    description:
      "The City of Toronto says it is closing another emergency shelter established during COVID-19 as it continues to move away from pandemic homelessness measures. ",
    content:
      "<p>The City of Toronto says it is closing another emergency shelter established during COVID-19 as it continues to move away from pandemic homelessness measures.In a news release, officials said an emergency shelter at 45 The Esplanade would close to new admissions on Wednesday.The building is a hotel and its owner plans to begin operating it again next year.</p><p>The emergency shelter is the third such temporary facility to close this year as Toronto moves away from the system it established during the pandemic.“The City of Toronto took extraordinary steps to support the wellbeing of people experiencing homelessness during the COVID-19 pandemic by opening temporary emergency shelter sites to ensure physical distancing was provided throughout the shelter system,” the city said.</p><p>“The City of Toronto took extraordinary steps to support the wellbeing of people experiencing homelessness during the COVID-19 pandemic by opening temporary emergency shelter sites to ensure physical distancing was provided throughout the shelter system,” the city said.“This report is not recommending a full return to the pre-COVID situation in the shelter system,” the staff report said.</p><br/> <b>Source : </b>https://globalnews.ca/news/9191112/toronto-close-third-temporary-homeless-shelter/ ",
    img: News4,
    route: "news/toronto-close-third-temporary-homeless-shelter/",
  },
];

export const eventsList = [
  {
    date: "22nd December 2022",
    location: "Jamenson Ave, lakshore, water park",
    time: "9am - 4pm",
    title: "Sleep Out events",
    description:
      "Every year, Covenant House hosts special fundraising events that support our work serving youth who are homeless, trafficked or at risk.",
    img: Event1,
    content:
      "<p>Every year, Covenant House hosts special fundraising events that support our work serving youth who are homeless, trafficked or at risk. Join us for a chance to learn, engage, network and show your commitment to the cause!</p><p>Sleep Outs are an immersive experience that allows you to explore the causes of youth homelessness, connect with youth at Covenant House and learn about how your fundraising is supporting tangible solutions. By taking up the challenge of spending one night on the street, you are demonstrating your commitment to making a difference in the lives of the most vulnerable.</p>",
    route: "events/join-a-sleep-out",
  },
  {
    date: "27nd December 2022",
    location: "Islington Ave, George Park",
    time: "9am - 12pm",
    title: "Guts + Glory",
    description:
      "Every year, Covenant House hosts special fundraising events that support our work serving youth who are homeless, trafficked or at risk. Join us for a chance to learn, engage, network and show your commitment to the cause!",
    img: Event2,
    content:
      "<p>Every year, Covenant House hosts special fundraising events that support our work serving youth who are homeless, trafficked or at risk. Join us for a chance to learn, engage, network and show your commitment to the cause!</p><p><p>Calling all corporate and community leaders! Be part of the action by gathering a team to compete in a series of obstacle course challenges. Points are awarded, egos rage. You support a great cause and fun is guaranteed.</p>",
    route: "events/guts-and-glory/",
  },
];
