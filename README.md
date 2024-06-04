# Development Report: Implementing Navigation with Expo Router

# Design Choices:

# Project Structure:

Organized the project to follow a clear structure with separate directories for components, screens, and navigation.
Used the tabs directory to organize different pages (Home, About, UserProfile) to maintain clarity and separation of concerns.

# Navigation:

Chose to implement a bottom tab navigator using @react-navigation/bottom-tabs to provide a user-friendly interface for navigating between different pages.
Used TypeScript for type safety, defining RootParamList to strongly type the navigation parameters.

# Components and Styling:

Created reusable components such as ThemedText and ThemedView to maintain consistent styling and theming across the app.
Used StyleSheet from react-native for modular and maintainable styling.

# Dynamic Routing:

Implemented dynamic routing for the UserProfile page to handle user-specific data by extracting route parameters.

# Challenges Encountered:


# Initial Setup Issues:

Faced multiple issues with setting up the Expo CLI and dealing with compatibility problems with Node.js versions.
Had to resolve various dependency issues and update the project structure to align with the latest Expo and React Navigation standards.

# Module Resolution:

Encountered several errors related to module resolution, especially with the @/components alias. This required configuring the tsconfig.json correctly and ensuring the paths were 
accurate.

# Nested Navigation Containers:

Ran into errors caused by nested NavigationContainer components, which required restructuring the navigation setup and using independent={true} to isolate navigation contexts.

# Dynamic Routing Typing:

Had to correctly type the route parameters using TypeScript, which involved understanding the RouteProp type and integrating it with the defined RootParamList.

# Static Rendering Errors:

Faced issues with static rendering and module not found errors for assets and components. This required thorough checking of file paths and ensuring assets were correctly located and 
referenced.

# UserProfile Page Parameter Handling:

Dealt with errors where the expected route parameters were not available or incorrectly typed, which required revisiting the TypeScript types and ensuring correct usage of route hooks.

# Conclusion:
Throughout the development process, the primary focus was on creating a well-structured, maintainable, and user-friendly navigation system using Expo and React Navigation. 
Despite several challenges, especially related to setup and configuration, the final implementation provides a robust navigation framework that can be easily extended for future 
features and enhancements. The use of TypeScript significantly improved type safety and helped catch errors early in the development process.
