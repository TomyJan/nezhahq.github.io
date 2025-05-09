---
outline: deep
---

# Agent Configuration

The Agent configuration file is in YAML format.

In the admin frontend, you can modify the Agent's configuration and apply it directly; you can also batch apply options through the API, see the [API documentation](/en_US/developer/api.html) for details.

---

## Options

- ##### **`client_secret`**

  - The client secret used for secure communication with the Dashboard.
  - This parameter must match the configuration in the Dashboard to enable proper communication.

- ##### **`debug`**

  - When set to `true`, enables logging.

- ##### **`disable_auto_update`**

  - When set to `true`, disables the automatic update feature, enhancing system stability and security.

- ##### **`disable_command_execute`**

  - When set to `true`, rejects **Command Execution**, **Online Terminal** and **File Manager** tasks.

- ##### **`disable_force_update`**

  - When set to `true`, disables forced updates, allowing only manual updates.

- ##### **`disable_nat`**

  - When set to `true`, rejects **NAT** tasks.

- ##### **`disable_send_query`**

  - When set to `true`, rejects **TCPing**, **ICMP Ping**, and **HTTP GET** tasks.

- ##### **`gpu`**

  - When set to `true`, enables GPU monitoring.
  - Note: Additional dependencies may be required for GPU monitoring. See the [GPU Monitoring Guide](/en_US/guide/q9.html) for details.

- ##### **`insecure_tls`**

  - When set to `true`, disables certificate validation, suitable for scenarios using self-signed certificates.

- ##### **`ip_report_period`**

  - Sets the interval (in seconds) for local IP updates. The default is `1800` seconds (30 minutes).
  - The valid minimum value is `30`.

- ##### **`report_delay`**

  - Sets the interval (in seconds) for system information reporting. The default is `3` seconds (valid range: 1-4 seconds).

- ##### **`server`**

  - The domain or IP address of the Dashboard for communication, including the port number.

- ##### **`skip_connection_count`**

  - When set to `true`, disables monitoring of network connection counts, suitable for servers with high connection volumes or limited resources.

- ##### **`skip_procs_count`**

  - When set to `true`, disables monitoring of process counts to lower resource usage.

- ##### **`temperature`**

  - When set to `true`, enables hardware temperature monitoring (only supported for specific hardware; unavailable for some VPS instances).

- ##### **`tls`**

  - When set to `true`, enables SSL/TLS encryption for communication between the Agent and the Dashboard.
  - Enable this option if the Agent uses an SSL/TLS-enabled Nginx reverse proxy.

- ##### **`hard_drive_partition_allowlist`**

  - A string array specifying the list of hard drive partitions to monitor.
  - Monitoring will only include the listed partitions.

- ##### **`nic_allowlist`**

  - A `map[string]bool` type whitelist specifying the network interfaces to monitor.
  - The key is the network interface name, and the value is `true` for monitoring and `false` for exclusion.
  - If not specified, all available interfaces are monitored by default.

- ##### **`use_gitee_to_upgrade`**

  - When set to `true`, uses the Gitee repository as the automatic update source, better suited for servers in mainland China.

- ##### **`use_ipv6_country_code`**

  - When set to `true`, forces the use of IPv6 addresses for country code queries (default uses IPv4).

- ##### **`uuid`**

  - The unique identifier for the current Agent, used by the Dashboard to recognize the data source.
  - To replace an existing Agent in the Dashboard, manually set this parameter.

- ##### **`dns`**

  - A string array to set custom DNS server lists.
  - When specified, the Agent will prioritize these DNS servers for domain resolution.

- ##### **`custom_ip_api`**

  - A string array specifying custom IP query API endpoints.
  - The Agent will use these APIs to retrieve the server's public IP information.

- ##### **`self_update_period`**
  - Set the update interval manually (in minutes).
  - Defaults to a random value between `30` and `90`.

---

## Apply Config

After modifying the parameters in the configuration file, you need to restart the Agent service for the changes to take effect. You can use the Agent's built-in service management or restart manually.

### Built-in Service Management

You can directly enter the following command to restart the default Agent service:

```shell
./agent service restart
```

For multiple Agent service scenarios, you can specify the corresponding configuration file:

```shell
./agent service -c ./config-6sc1f.yml restart
```

### Manual

1. **Restart the Service**  
   Use the following command to restart the default Agent service:

   ```bash
   sudo systemctl restart nezha-agent.service
   ```

2. **For Multiple Agent Services**  
   If running multiple Agent services on the same server, first list all Agent services:
   ```bash
   sudo systemctl list-units --type=service | grep nezha-agent
   ```
   Then restart each Agent service using the following command:
   ```bash
   sudo systemctl restart <service-name>
   ```
   Replace `<service-name>` with the actual service name, such as `nezha-agent@2.service`.
