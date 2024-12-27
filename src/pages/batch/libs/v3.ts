import { useEffect, useState } from 'react';

/**
 * Type definition for a single dynamic effect function.
 * The effect function can optionally return a cleanup function.
 */
type EffectFn = () => void | (() => void);

/**
 * Interface representing a dynamic effect with its dependencies.
 */
interface DynamicEffect {
  effectFn: EffectFn; // The effect function to execute.
  deps: React.DependencyList; // The dependency array for the effect.
}

/**
 * Custom hook to dynamically add or remove `useEffect`-like effects.
 * This allows managing multiple effects at runtime.
 * 
 * NOTE: Not for production use since API is not stable.
 */
export const useDynamicEffect = () => {
  // State to hold the list of dynamic effects.
  const [effects, setEffects] = useState<DynamicEffect[]>([]);

  /**
   * Adds a new dynamic effect to the list.
   * @param effectFn - The effect function to execute.
   * @param deps - The dependency array for the effect function.
   * @returns The index of the newly added effect.
   */
  const addEffect = (effectFn: EffectFn, deps: React.DependencyList): number => {
    setEffects((prev) => [...prev, { effectFn, deps }]);
    return effects.length; // Return the index of the newly added effect.
  };

  /**
   * Removes a dynamic effect from the list by its index.
   * @param index - The index of the effect to remove.
   */
  const removeEffect = (index: number) => {
    setEffects((prev) => prev.filter((_, i) => i !== index));
  };

  /**
   * React's `useEffect` to monitor the dynamic effects list.
   * It executes all effect functions in the list and handles their cleanup.
   */
  useEffect(() => {
    // Execute all effects and collect their cleanup functions.
    const cleanups: Array<(() => void) | undefined> = effects.map(({ effectFn }) => {
      const cleanup = effectFn(); // Execute the effect function.
      return typeof cleanup === 'function' ? cleanup : undefined; // Collect cleanup function if it exists.
    });

    // Cleanup all effects when dependencies change or on unmount.
    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, [effects]); // Re-run the effect whenever the `effects` list changes.

  return { addEffect, removeEffect }; // Return methods to manage dynamic effects.
};
