# Governance Charter

## Overview

This document describes the bootstrap governance process under which the project will operate
until the final governance process is identified.

## Goals

The initial role of the governance committee is to **instantiate the formal
process for OpenFeature governance**. In addition to defining the initial
governance process, the bootstrap committee strongly believes that **it is
important to provide a means for iterating** the processes defined by the
governance committee. We do not believe that we will get it right the first
time, or possibly ever, and won’t even complete the governance development in a
single shot. The role of the governance committee is to be a live, responsive
body that can refactor and reform as necessary to adapt to a changing project
and community.

## Governance Committee

The _Governance Committee_ is responsible for
representing the project,
making a final decision if a consensus cannot be reached (see _Decision Making_),
handling the Code of Conduct escalations,
defining and approving with the project members the final governance model,
and organizing elections for the elected governance board body.

### Governance Committee Members

[Governance Committee Members](./community-members.md#governance-board)

> NOTE:
> In April 2022 _Project Maintainers_ assigned five seven individuals to be members of the _Bootstrap Governance Committee_.
> This is a **temporary** arrangement that should be replaced by an elected governing body before March 2024.

## Technical Committee (TC)

The project has a _Technical Committee (TC)_
that consists of three maintainers who actively contribute to the project.
The role of the technical committee is to facilitate development of the
OpenFeature specification and other technical decisions in the project.
The responsibilities include reviewing the incoming enhancement proposal and pull requests,
driving the decision making process
and building consensus among the OpenFeature community.
At the moment, TC members do not get special permissions beyond what other maintainers have.

### TC Members

[Technical Committee Members](./community-members.md#technical-committee)

### TC Charter

The technical committee is initially bootstrapped by 3
contributors based on the consensus of contributors and maintainers of the project.
Their term is **one year**.
Then the technical committee members are re-elected based on the public nomination and decision making process.
The same happens when a TC member steps down from the role in the middle of the term,
an acting TC member is appointed by the community until the end of the term.

At any time, less than 50% of the TC members can be affiliated with a single company.
If the affiliation changes during the term and violates the rule,
one of the TC members should step down.

## Decision making

Decisions are made by a consensus of _Project Members_ and [Interested Parties](./interested-parties.md).
If this consensus cannot be reached,
the decision can be made by the plain majority vote of _Bootstrap Governance Committee Members_.

<!-- TODO: List founding members or delegate the decision to CDF TAG App Delivery or another entity -->

Key discussions and decisions should happen asynchronously in communication channels like GitHub Issues, discussions or pull requests.
Technical decisions are expected to be documented in the
[OpenFeature Specification](https://github.com/open-feature/spec).
The community decisions should be documented in this Governance repository.

## Meetings

The project conducts [regular project meetings](https://github.com/open-feature/community#meetings-and-events)
hosted by its maintainers and contributors.
These meetings are used as additional discussion and consensus building
but not for making decisions without prior discussion in async channels.

### Project roles

The following project roles are defined at the moment:
_Community Participant_,
_Contributor_,
_Organization Member_,
_Triager_,
_Approver_,
_Maintainer_,
_Technical Committee Member_,
_Bootstrap Governance Committee Member_.
These roles are defined below.

See [Contributor Ladder](./CONTRIBUTOR_LADDER.md) for additional information.

In addition to the elected maintainer roles,
3 individuals get the maintainer status at the inception of the project:

- Michael Beemer, @beeme1mr, Dynatrace
- Alois Reitbauer, @AloisReitbauer, Dynatrace/CNCF/Keptn
- Oleg Nenashev, @oleg-nenashev, Dynatrace/CDF/Jenkins/Keptn

#### Bootstrap Governance Committee Members

> :warning: This is a **temporary role** while the bootstrap governance is active.
> In the future this role will be replaced by an elected _Governance Committee Member_ role.

Bootstrap Governance Committee members are responsible for representing the project in communications with organizations,
including but not limited to contributor companies, adopters, vendors and foundations.
Apart from the representative role,
they can make a final decision when a consensus cannot be reached.

In April 2022 this role will be assigned by project maintainers to **seven** individuals listed in [Interested Parties](./interested-parties.md).
Each company/organization should have less than 50% of the seats,


### Establishment of a Governance Committee

To bootstrap the process of OpenFeature governance, 6 individuals were
identified to be the *Bootstrap Committee*, to provide the initial process that
can bootstrap the remainder of the process.

The Bootstrap Committee will be replaced by the elected Governance
Committee. Ultimately, the **OpenFeature Governance Committee will consist
of 7 individual members** of the community **elected for 2 year terms**. The
terms will be **staggered with 1 year elections** (alternating 3 seats and 4
seats).

To provide a level of continuity as this process is established, the initial
committee will include continuity members, at least 4 members from the current
Governance Committee.

In December 2023 we will hold the first election with 4 positions to be elected from the
current Governance committee and 3 members from the community. 
The 4 members that are elected from the current governance board will have a one year term and 
and the 3 elected from the community will have a two year term. 

One year later (in 2024) there will be an election to fill the four seats
opening up, each with a two year term.

One year after that (2025), there will be an election to fill the 3 open
seats on the governance committee.

The committee will continue to iterate with alternating elections of three and
four members each year. 


## Elections

### Members
People which are part of the GitHub Organization are considered as members and are eligible to vote.

### Eligibility for candidacy

Anyone may nominate either themselves or someone else to be a candidate in the
election. To be ratified as a candidate, the nominee must accept the nomination
and three Members (including the nominator, if they are a member)
from three different employers, must endorse the nomination.

Nominators are free to nominate as many people as they wish to. Members
may endorse multiple nominees, but we expect endorsements to be in good
faith. If this turns out to be a problem, this will be reconsidered.

### Eligibility for voting

All Members are eligible to vote for the governance committee
members. 

### Election process

Elections will be held using time-limited approval voting on
[Helios](https://vote.heliosvoting.org/). The top vote getters will be elected
to the respective positions.

### Maximal representation

To encourage diversity there will be a maximum of one-third representation on
the Governance Committee from any one company at any time. If the outcomes of
an election result in greater than 1/3 representation (or maximum of two,
whichever is greater), the lowest vote getters from any particular company will
be removed until representation on the committee is equal or less than one-third.

If percentages shift because of job changes, acquisitions, or other events,
sufficient members of the committee must resign until max one-third
representation is achieved. If it is impossible to find sufficient members to
resign, the entire company’s representation will be removed and new special
elections held. In the event of a question of company membership (for example
evaluating independence of corporate subsidiaries) a majority of all
non-involved Governance Committee members will decide. 

### Initial Election

The bootstrap committee will operate the election and circulate a timeline for
nominations, and the vote.

### Special Elections

In the event of a resignation or other loss of a governance committee member, a
special election for that position will be held as soon as possible. The same
group of people as described in "eligibility for voting" will vote in the
special election. A committee member elected in a special election will serve
out the remainder of the term for the person they are replacing, regardless of
the length of that remainder.

### Limiting Corporate Campaigning Support

To reduce the size of company advantages, candidates may not use their companies
internal or external brand to campaign. Their employers cannot solicit votes on
their behalf or sponsor candidates from partner organizations. Simply put,
elections highlight individuals outside of their corporate role and should be
treated as "brand free" activities.

## Refactoring or reforming the governance committee

At any time the governance committee may vote, via supermajority (greater than
two-thirds of votes), to rewrite or remove any part of this charter. Beyond
small tweaks, this should be used sparingly, if ever, and in the presence of
clear failures of the process. We explicitly do not allocate a role for the
broader community in reformulating governance, we believe that in such a case
the community will "vote with their feet" by either leaving or forking the
project.

## Emeritus Term

Members of the governance committee will graduate to becoming *Emeritus* members
of the governance committee.



