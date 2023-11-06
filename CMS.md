# Collections

List of collections added to CMS:

- Category
- Service
- State
- Project
- Collaborator
- Member
- Offer



## Category collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Layout** | `layout` | `hidden` | `category` | Template used | - | - | 
| **Call to action** | `call_to_action` | `hidden` | `cta-contact-service` | Contact modal | - | - | 
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `future_culture` | - | 
| **Título** | `title` | `string` |  | Category title | `Future culture` | - | 
| **Subtítulo** | `subtitle` | `markdown` | - | Category subtitle | `This is the future culture category` | - | 
| **Banner symbol** | `symbol` | `object` | - | Category symbol | - | /media/categories | 
| **Servicios** | `services` | `relation` | - | Services related | `Service1, Service2` | - | 

Category provides services, which are available at the Service collection.

## Service collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `serv1` | - | 
| **Título** | `title` | `string` |  | Service title | `Servicio 1` | - | 
| **Descripción** | `description` | `markdown` | - | Service description | `This is the service 1` | - | 

## State collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `open` | - |
| **Título** | `title` | `string` | - | Project state | `Open Project`  | - |  
| **Color** | `color` | `string` | - | State color | `green`  | - | 

## Project collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Layout** | `layout` | `hidden` | `project` | Template used | - | - | 
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `pro1` | - | 
| **Estado** | `state` | `relation` | - | Project state | `open` | - | 
| **Título** | `title` | `string` |  | Project title | `Proyecto 1`  | - | 
| **Subtítulo** | `subtitle` | `markdown` | - | Project subtitle | `This is the project 1` | - | 
| **Banner image** | `banner_image` | `object` | - | Banner image | - | /media/projects | 
| **Fecha** | `date` | `datetime` | - | Date | - | - | 
| **Descripción** | `description` | `markdown` | - | Project description | `This is the project 1` | - | 
| **Presupuesto** | `budget` | `string` | - | Project budget | `30000` | - | 
| **Porcentaje privado** | `private_percentage` | `string` | - | Private budget percentage | `33` | - | 
| **Porcentaje público** | `public_percentage` | `string` | - | Public budget percentage | `33` | - | 
| **Porcentaje en busca de financiación** | `looking_finance_percentage` | `string` | - | Percentage of the budget looking for finance | `33` | - | 
| **Servicios** | `services` | `relation` | - | Services related | `Service1, Service2` | - | 
| **Categorías** | `categories` | `relation` | - | Categories which contains this project | `future_culture, inclusive_innovation` | - | 
| **Miembros** | `members` | `relation` | - | People in the project | `emo,lrb` | - | 
| **Colaboradores** | `collaborators` | `relation` | - | Entities collaborating in the project | `col1` | - | 
| **Contenido de la página** | `body` | `markdown` | - | Page content (image plugin, video plugin...) | - | - | 

Project belongs to categories, which are available at the Category collection. \
Project is related with one object from the collection State, which represents the project state (open, closed) \
Project provides services, which are available at the Service collection. \
Project has members, which are available at the Member collection. \
Project has collaborators, which are available at the Collaborator collection. \

## Collaborator collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `col1` | - | 
| **Nombre** | `title` | `string` | - | Name of the entity | `Greenpeace`  | - | 
| **Logo image** | `logo` | `object` | - | Entity logo | - | /media/collaborators | 

## Member collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `emo` | - | 
| **Nombre** | `title` | `string` | - | Person name | `Marc Márquez`  | - | 
| **Tipo** | `type` | `select` | - | Member type (author or collaborator) | `author`  | - | 
| **Image** | `image` | `object` | - | Member photo | - | /media/members |
| **Cargo** | `position` | `string` | - | Member position | `Director` | - |
| **Descripción** | `description` | `markdown` | - | Member description | `Marc joined the company in...` | - |
| **Email** | `email` | `string` | - | Member email | `marc@gmail.com` | - |
| **Facebook** | `facebook` | `string` | - | Facebook account link | - | - |
| **X (Twitter)** | `twitter` | `string` | - | Twitter account link | - | - |
| **LinkedIn** | `linkedin` | `string` | - | LinkedIn account link | - | - |

## Offer collection

| Label | Name in .md file | Widget (type) | Default | Description | Example | Media folder |
|---|---|---|---|---|---|---|
| **Layout** | `layout` | `hidden` | `offer` | Template used | - | - | 
| **Call to action** | `call_to_action` | `hidden` | `cta-contact-offer` | Contact modal | - | - |
| **Slug** | `slug` | `string` | - | Unique identifier, shared between languages | `offer1` | - |  
| **Título** | `title` | `string` |  | Offer title | `Oferta 1`  | - |  
| **Subtítulo** | `subtitle` | `string` | - | offer subtitle | `This is the job offer 1` | - | 
| **Contenido de la página** | `body` | `markdown` | - | Offer content and PDF (using document plugin) | `This is the offer1... {%documents ... %}` | - | 