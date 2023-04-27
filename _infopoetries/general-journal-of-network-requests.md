---
title: General Journal of Network Requests
author:
  name: Andrea Benedetto
year: 2022-2023
topic: Digital Traces
medium: Book
interactive: false
institute: Politecnico di Milano
featured: /assets/images/uploads/2022-2023_benedetto_1.jpg
images:
  - /assets/images/uploads/2022-2023_benedetto_2.jpg
  - /assets/images/uploads/2022-2023_benedetto_3.jpg
  - /assets/images/uploads/2022-2023_benedetto_4.jpg
  - /assets/images/uploads/2022-2023_benedetto_5.jpg
source:
  name: uBlock Origin's logs
metaphor: 'General Journal: "A general journal is a daybook or subsidiary
  journal in which transactions relating to adjustment entries, opening stock,
  depreciation, accounting errors etc. are recorded. [...] Journals are prime
  entry books, and may also be referred to as books of original entry, from when
  transactions were written in a journal before they were manually posted to
  accounts in the general ledger or a subsidiary ledger."
  (https://en.wikipedia.org/wiki/General_journal)'
meaning: >-
  "This kind of data is controversial. Today, it’s pretty commonplace to hear
  people say that they don’t care at all about heavy data collection or tracking
  (“if you have nothing to hide, why do you care about privacy?”), even though
  it raises many political and economic concerns. In fact, many activists,
  writers, and researchers usually refer to these issues with the concept of
  surveillance capitalism, which essentially contextualises the age we’re living
  now—an age in which corporate and governmental entities collect, sell and
  share our private data to each other for profit and control, without
  repercussions nor explicit consent. Therefore, the aim of using my personal
  data is to highlight the quantity of network requests that are related to
  tracking or advertising during a typical day of web surfing, from the
  perspective of someone who is trying to steadily stray away from “big tech”
  and slowly moving to FLOSS (Free/Libre and Open Source Software) or
  self-hosted alternatives.

  The format—one of a long and detailed book of economic transactions—not only relates to what is usually done with the data referred by the logs themselves (capitalisation), but is also a physical enunciation of it. Thus, it gives it weight and importance, while being transparent and straight-forward in its delivery. To highlight the amount of filtering, blocked and redirected requests are colour-coded, so that the reader can reflect upon and possibly reconsider their position on the broader issue of surveillance capitalism."
---
This journal serves as an evidence of the amount of services and requests uBlock Origin (uBO)—an extension I use on my main internet browser—allows, blocks or redirects during a casual day of web surfing, so that a rough but concrete assessment of the amount of tracking, advertising and malware I filter out can be done. 
The dataset is constituted by logs exported from uBO. Every request is detailed by its timestamp, the website it originated from, and the type of resource it corresponds to—for a total of about 50k rows.