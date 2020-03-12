<?php

class PasswordUtil
{
    
    const memory = PASSWORD_ARGON2_DEFAULT_MEMORY_COST;
    const timeCost = PASSWORD_ARGON2_DEFAULT_TIME_COST;
    const parallelism = PASSWORD_ARGON2_DEFAULT_THREADS;
    
    /**
     * Compute a hash of a password.
     *
     * @param string $password
     *            Password to hash.
     * @return string The hash in format "$argon2i$v=19$m=1024,t=2,p=2$amRwcjA5ZUlUZDdDNEJHRg$B6K1JOhuh2IyEsDrGFZHrmD+118gtj1tKt1V1n2ftus"
     */
    public static function hash($password)
    {
        // Create Argon2 options (associative array) to use for hashing.
        $options = [
            "memory_cost" => self::memory,
            "time_cost" => self::timeCost,
            "threads" => self::parallelism
        ];
        // Compute the hash and return it
        return password_hash($password, PASSWORD_ARGON2I, $options);
    }
    
    /**
     * Verifies a password against a hash
     * Password provided is wiped at the end of this method
     *
     * @param string $password
     *            Password to which hash must be verified against.
     * @param string $hash
     *            Hash to verify.
     * @return bool True if the password matches the hash, False otherwise.
     */
    public static function verify($password, $hash)
    {
        // Apply the verification (hash computation options
        // are included in the hash itself) and return the result
        return password_verify($password, $hash);
    }
}
?>