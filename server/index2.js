import dotenv from "dotenv";
import express from "express";

dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "hr-db",
  port: 5432,
});

const app = express();

app.use(express.json());

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

//region start

app.get("/region", (req, res) => {
  pool.query("select * from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/region", (req, res) => {
  const { name } = req.body;
  pool.query(
    "insert into regions (region_name) values ($1)",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/region/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update regions set region_name=$2 where region_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from regions where region_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//region end

//employee start

app.get("/employee", (req, res) => {
  pool.query("select * from employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/employee/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/employee", (req, res) => {
  const { first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id} = req.body;
  pool.query(
    "insert into employees (first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/employee/:id", (req, res) => {
  const { id } = req.params;
  const {first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id } = req.body;
  pool.query(
    "update employees set first_name = $2, last_name = $3, email = $4, phone_number = $5, hire_date = $6, salary = $7, commission_pct = $8, job_id = $9, manager_id = $10, department_id = $11, xemp_id = $12 where employee_id = $1",
    [id, first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/employee/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      'delete from employees where employee_id = $1',
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

//employee end

// countries start

app.get("/countries", (req, res) => {
    pool.query("select * from countries", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    });
  });
  
  app.get("/countries/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      "select * from countries where country_id = $1",
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rows);
      }
    );
  });
  
  app.post("/countries", (req, res) => {
    const { country_id, country_name, region_id } = req.body;
    pool.query(
      "insert into countries (country_id, country_name, region_id) values ($1, $2, $3)",
      [country_id, country_name, region_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.put("/countries/:id", (req, res) => {
    const { id } = req.params;
    const { country_name, region_id } = req.body;
    pool.query(
      "update countries set country_name = $2, region_id = $3 where country_id=$1",
      [id, country_name, region_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.delete("/countries/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      'delete from countries where country_id = $1',
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

// countries end

// department start

app.get("/departments", (req, res) => {
    pool.query("select * from departments", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    });
  });
  
  app.get("/departments/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      "select * from departments where department_id = $1",
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rows);
      }
    );
  });
  
  app.post("/departments", (req, res) => {
    const { department_name, manager_id, location_id } = req.body;
    pool.query(
      "insert into departments (department_name, manager_id, location_id) values ($1, $2, $3)",
      [department_name, manager_id, location_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.put("/departments/:id", (req, res) => {
    const { id } = req.params;
    const { department_name, manager_id, location_id } = req.body;
    pool.query(
      "update departments set department_name = $2, manager_id = $3, location_id = $4 where department_id = $1",
      [id, department_name, manager_id, location_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.delete("/departments/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      `delete from departments where department_id = ${id}`,
      [],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

// department end

// jobhistory start

app.get("/job_history", (req, res) => {
    pool.query("select * from job_history", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    });
  });
  
  app.get("/job_history/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      "select * from job_history where employee_id = $1",
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rows);
      }
    );
  });
  
  app.post("/job_history", (req, res) => {
    const { employee_id, start_date, end_date, job_id, department_id } = req.body;
    pool.query(
      "insert into job_history (employee_id, start_date, end_date, job_id, department_id) values ($1, $2, $3, $4, $5)",
      [employee_id, start_date, end_date, job_id, department_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.put("/job_history/:id", (req, res) => {
    const { id } = req.params;
    const { start_date, end_date, job_id, department_id } = req.body;
    pool.query(
      "update job_history set start_date = $2, end_date = $3, job_id = $4, department_id = $5 where employee_id = $1",
      [id, start_date, end_date, job_id, department_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.delete("/job_history/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      `delete from job_history where employee_id = ${id}`,
      [],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

// jobhistory end

// job start

app.get("/jobs", (req, res) => {
    pool.query("select * from jobs", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    });
  });
  
  app.get("/jobs/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      "select * from jobs where job_id = $1",
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rows);
      }
    );
  });
  
  app.post("/jobs", (req, res) => {
    const { job_id, job_title, min_salary, max_salary } = req.body;
    pool.query(
      "insert into jobs (job_id, job_title, min_salary, max_salary) values ($1, $2, $3, $4)",
      [job_id, job_title, min_salary, max_salary],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.put("/jobs/:id", (req, res) => {
    const { id } = req.params;
    const { job_title, min_salary, max_salary } = req.body;
    pool.query(
      "update jobs set job_title = $2, min_salary = $3, max_salary = $4 where job_id = $1",
      [id, job_title, min_salary, max_salary],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.delete("/jobs/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      'delete from jobs where job_id = $1',
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

// job end

// location start

app.get("/locations", (req, res) => {
    pool.query("select * from locations", [], (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    });
  });
  
  app.get("/locations/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      "select * from locations where location_id = $1",
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rows);
      }
    );
  });
  
  app.post("/locations", (req, res) => {
    const { street_address, postal_code, city, state_province, country_id } = req.body;
    pool.query(
      "insert into locations (street_address, postal_code, city, state_province, country_id) values ($1, $2, $3, $4, $5)",
      [street_address, postal_code, city, state_province, country_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.put("/locations/:id", (req, res) => {
    const { id } = req.params;
    const { street_address, postal_code, city, state_province, country_id } = req.body;
    pool.query(
      "update locations set street_address = $2, postal_code = $3, city = $4, state_province = $5, country_id = $6 where location_id = $1",
      [id, street_address, postal_code, city, state_province, country_id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });
  
  app.delete("/locations/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      'delete from locations where location_id = $1',
      [id],
      (error, result) => {
        if (error) {
          throw error;
        }
        res.json(result.rowCount);
      }
    );
  });

// location end

