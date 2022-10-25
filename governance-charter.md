# OpenFeature Governance Charter

This document describes the bootstrap governance process under which the project will operate
until the final governance process is identified.

> :warning: This is a temporary (aka bootstrap) governance document that
> is effective until the project is fully established.
> See [this issue](https://github.com/open-feature/governance/issues/11) for the scope of the full governance document.

## Governing Committee

The _Governing Committee_ is responsible for
representing the project,
making a final decision if a consensus cannot be reached (see _Decision Making_),
handling the Code of Conduct escalations,
defining and approving with the project members the final governance model,
and organizing elections for the elected governance board body.

Members of the governing committee:

- [Michael Beemer](https://github.com/beeme1mr), Dynatrace, term: April 28, 2022 - TBD
- [Ben Rometsch](https://github.com/dabeeeenster), Flagsmith, term: April 28, 2022 - TBD
- [Justin Abrahms](https://github.com/justinabrahms), eBay, term: April 28, 2022 - TBD
- [Pete Hodgson](https://github.com/moredip), Independent, term: April 28, 2022 - TBD
- [Alois Reitbauer](https://github.com/aloisreitbauer), Dynatrace, term: Oct 1st, 2022 - TBD
- Vacant
- Vacant

> NOTE:
> In April 2022 _Project Maintainers_ assigned five seven individuals to be members of the _Bootstrap Governing Committee_.
> This is a **temporary** arrangement that should be replaced by an elected governing body before March 2024.
> Two seats remain vacant at the moment

## Technical Steering Committee (TSC)

The project has a _Technical Steering Committee (TSC)_
that consists of three maintainers who actively contribute to the project.
The role of the steering committee is to facilitate development of the
OpenFeature specification and other technical decisions in the project.
The responsibilities include reviewing the incoming enhancement proposal and pull requests,
driving the decision making process
and building consensus among the OpenFeature community.
At the moment, TSC members do not get special permissions beyond what other maintainers have.

### TSC Members

- [Todd Baert](https://github.com/toddbaert), Dynatrace, term: April 28, 2022 - April 28, 2023
- [Steve Arch](https://github.com/agentgonzo), CloudBees, term: April 28, 2022 - April 28, 2023
- [Dan O’Brien](https://github.com/InTheCloudDan), LaunchDarkly, term: April 28, 2022 - April 28, 2023

### TSC Charter

The technical steering committee is initially bootstrapped by 3 
contributors based on the consensus of contributors and maintainers of the project.
Their term is **one year**. 
Then the steering committee members are re-elected based on the public nomination and decision making process.
The same happens when a TSC member steps down from the role in the middle of the term,
an acting TSC member is appointed by the community until the end of the term.

At any time, less than 50% of the TSC members can be affiliated with a single company.
If the affiliation changes during the term and violates the rule,
one of the TSC members should step down.

## Decision making

Decisions are made by a consensus of _Project Members_ and [Interested Parties](./interested-parties.md).
If this consensus cannot be reached,
the decision can be made by the plain majority vote of _Bootstrap Governing Committee Members_.

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
_Project member_,
_Maintainer_,
_Bootstrap Governance Committee Member_.
These roles are defined below.

#### Project members

Project members are a group of contributors with the minimum entry bar.
They are welcome to take leadership in initiatives
and to participate in the project's open governance and decision making process.

While the project is in the bootstrap governance phase,
any individual who declares their interest in the [Interested Parties list](./interested-parties.md) will considered as project member and invited to the project's GitHub organization.
It may require signing a Contributor License Agreement should it be introduced in the project.

#### Maintainers

Maintainers take responsibility for maintaining OpenFeature projects and repositories.
They review and integrate changes submitted to their repositories,
and also ensure that the decision making process is followed.
Maintainer status can be granted within a single repository or within the entire GitHub organization.

Maintainers are elected by project members according to the _Decision Making_ process.
They are expected to demonstrate substantial code or non-code contributions to the project,
and to also be able to dedicate some time to maintenance and regular participation in the community.

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
and hence an organization can have only up to three seats.
The project maintainers are also responsible to review their nominations with the community,
and to do the best effort to address any feedback/concerns.
